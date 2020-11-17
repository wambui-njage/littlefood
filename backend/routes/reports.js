const express = require('express');
const router = express.Router();
const { MerchantTransactions , Rider ,Corporate} = require("../config/db");
const excel = require('exceljs');
const moment = require('moment');
const { Sequelize, Op } = require("sequelize");
const sequelize = new Sequelize('mssql::memory:');
const { sendDataDecrypt } = require('../utils');

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
    let customers = []
    let corps = await Corporate.findAll({

      where: { ParentID: req.session.corporate.CorporateID } ,
      attributes: ['CorporateID'],
      raw : true

    })
    .then(corporates => corporates.map(corporate => corporate.CorporateID));

    if (!corps) corps = [req.session.corporate.CorporateID]

    for(let i = 0; i < corps.length; i++){

      const str = `FORMID|LISTOOD|FROMDATE|${moment(from).format('YYYY-MM-DD')}|TODATE|${moment(to).format('YYYY-MM-DD')}|CORPORATEID|${corps[i]}|COUNTRY|KENYA`
      let jsonCustomers = await sendDataDecrypt(process.env.TESTURL, str)
      if (jsonCustomers) customers.push( JSON.parse( jsonCustomers.substring(1, jsonCustomers.length-1) ) )


    }

    


    // jsonCustomers = await MerchantTransactions.findAll({ 
    //     where: {
    //       CorporateID: { [Op.in]:  corps},
    //       TrxDate: {
    //               [Op.gte]: moment(from).format('YYYY-MM-DD'),
    //               [Op.lte]: moment(to).format('YYYY-MM-DD')
    //          }
    //       } 
    //  })


    if(!customers.length){

      return res
      .status(404).json({"message":"No transactions found for the date range given"});
    }


    let workbook = new excel.Workbook(); //creating workbook
    let worksheet = workbook.addWorksheet('Customers'); //creating worksheet

    //  WorkSheet Header
    worksheet.columns = [
        { header: 'Trip ID', key: 'TripID', width: 30 },
        { header: 'Customer Name', key: 'OfficialName', width: 30 },
        { header: 'Customer Phone', key: 'MobileNumber', width: 30 },
        { header: 'Email Address', key: 'StaffEMail', width: 30 },
        { header: 'Department', key: 'Department', width: 30 },
        { header: 'Restaurant Name', key: 'MerchantName', width: 30 },
        { header: 'Payment Amount', key: 'Amount', width: 30 },
     
        
    ];

    // const imageId1 = workbook.addImage({
    //     filename: "public/little.png",
    //     extension: 'png',
    //   },
    //   {ext: { width: 500, height: 200 }}
    //   );

      // set background
    // worksheet.addBackgroundImage(imageId1);

    // Add Array Rows
    worksheet.addRows(customers);

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=' + 'customer.xlsx');

    return workbook.xlsx.write(res)
          .then(function() {
                res.status(200).end();
          });
   
});

module.exports = router;