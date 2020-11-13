const express = require('express');
const router = express.Router();
const { MerchantTransactions , Rider} = require("../config/db");
const excel = require('exceljs');
const moment = require('moment');
const { Sequelize, Op } = require("sequelize");
const sequelize = new Sequelize('mssql::memory:');

router.get('/' , async function(req,res,next){

  const report = await MerchantTransactions.findAll({ 
        where: {
          CorporateID:req.session.corporate.CorporateID,
             TrxDate: {
                  [Op.gte]: moment().startOf('year').format("YYYY-MM-DD"), 
                  [Op.lte]: moment().endOf('year').format("YYYY-MM-DD")
             }
          } ,
        attributes: [ 
          
          [sequelize.literal('datepart(MONTH, TrxDate)'), 'TrxDate'],
          [sequelize.fn('count',sequelize.col('RowID')), 'total']
        ],
         group: [sequelize.literal('datepart(MONTH, TrxDate)')]
     });

     if(!report.length){

       return res.status(404).json({"message":"No Data Found"});

     }

      return res.status(200).json(report);

});

router.get('/users' , async function(req,res,next){

  const report = await Rider.findAll({

            include: [{
            model: MerchantTransactions,
            where: {
                CorporateID:req.session.corporate.CorporateID,
                TrxDate: {
                      [Op.gte]: moment().startOf('year').format("YYYY-MM-DD"), 
                      [Op.lte]: moment().endOf('year').format("YYYY-MM-DD")
                      }
                },

            attributes: [],
            

          }],

          attributes: { 
            include: [
              [sequelize.fn("COUNT", sequelize.col("MerchantTransactions.RowID")), "total"]
            ] 
          },
          
          group: ["Riders.MobileNumber","Riders.EMailID","Riders.FullName","Riders.ProfilePicture"],
          order: [[Sequelize.literal('total'), 'DESC']],
         
          
  });
  
  //await MerchantTransactions.findAll({ 
  //       where: {
  //         // CorporateID:req.session.corporate.CorporateID,
  //            TrxDate: {
  //                 [Op.gte]: moment().startOf('year').format("YYYY-MM-DD"), 
  //                 [Op.lte]: moment().endOf('year').format("YYYY-MM-DD")
  //            }
  //         } ,

  //         include: [{
  //           model: Rider
  //         }],

  //       attributes: [       

  //         [sequelize.fn('count',sequelize.col('RowID')), 'total'],
  //         "MerchantTransactions.MobileNumber"

  //       ],
        
  //       group: "MerchantTransactions.MobileNumber",

  //       order: [
  //         [sequelize.fn('count',sequelize.col('RowID')),'DESC']
  //       ],
  //       limit:5
  //    });

     if(!report.length){

       return res.status(404).json({"message":"No Data Found"});

     }

      return res.status(200).json(report);

});

router.post('/food', async function(req, res, next) {

    let { from, to  } = req.body;

    

    jsonCustomers = await MerchantTransactions.findAll({ 
        where: {
          CorporateID:req.session.corporate.CorporateID,
          TrxDate: {
                  [Op.gte]: moment(from).format('YYYY-MM-DD'),
                  [Op.lte]: moment(to).format('YYYY-MM-DD')
             }
          } 
     })
      console.log("CUSOTMER => ", jsonCustomers);

    if(!jsonCustomers.length){

      return res
      .status(404).json({"message":"No transactions found for the date range given"});
    }


    let workbook = new excel.Workbook(); //creating workbook
    let worksheet = workbook.addWorksheet('Customers'); //creating worksheet

    //  WorkSheet Header
    worksheet.columns = [
        { header: 'Customer Phone', key: 'MobileNumber', width: 30 },
        { header: 'Email Address', key: 'EMailID', width: 30 },
        { header: 'Date', key: 'TrxDate', width: 30 },
        { header: 'Payment Amount', key: 'Amount', width: 30 },
        { header: 'Mode of Payment', key: 'PaymentMode', width: 30 }
     
        
    ];

    const imageId1 = workbook.addImage({
        filename: "public/little.png",
        extension: 'png',
      },
      {ext: { width: 500, height: 200 }}
      );

      // set background
    worksheet.addBackgroundImage(imageId1);

    // Add Array Rows
    worksheet.addRows(jsonCustomers);

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=' + 'customer.xlsx');

    return workbook.xlsx.write(res)
          .then(function() {
                res.status(200).end();
          });
   
});

module.exports = router;