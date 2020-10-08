const express = require('express');
const router = express.Router();
const { Restaurant } = require("../config/db");
const excel = require('exceljs');
const moment = require('moment');


router.post('/food', async function(req, res, next) {

    let { from, to  } = req.body;

    if(!from){

        from =  moment().startOf('day').format("MM-DD-YYYY");  

    }

    if(!to){

        to =  moment().endOf('day').format("MM-DD-YYYY");  

    }


    const jsonCustomers = JSON.parse(JSON.stringify(await Restaurant.findAll()));
    let workbook = new excel.Workbook(); //creating workbook
    let worksheet = workbook.addWorksheet('Customers'); //creating worksheet

    //  WorkSheet Header
    worksheet.columns = [
        { header: 'Name', key: 'RestaurantName', width: 30 },
        { header: 'TypeOfRestaurant', key: 'TypeOfRestaurant', width: 30 }
        
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