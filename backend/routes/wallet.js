const express = require("express");
const router = express.Router();
const { sendData } = require('../utils');


router.post('/', async (req, res) => {

    const data = JSON.stringify({
        "FORMID":"ADDCORPORATEWALLET",
        "CorporateWallet":{
        "MobileNumber": req.body.MobileNumber,
        "CorporateID" :req.body.CorporateID,
        "WalletType":"FOOD",
        "LimitType" :req.body.LimitType,
        "LimitAmount":req.body.Amount,
        "UserID" :req.session.user.email,
        "Country" :"KENYA"
        }
    })


    const str = `FORMID|JSONDATA|JSONDATA|${data}`;
    const results = await sendData(process.env.TESTURL, str);

   if(results[0].Status === "091"){

       return res.status(403).json({"message":results[0].Message});
   }

      return res.status(200).json({"message":results[0].Message});

		
})


router.get('/', async (req, res) => {

    const data = JSON.stringify({
        "FORMID":"GETCORPORATEWALLET",
        "CorporateWallet":{
        "MobileNumber": req.body.MobileNumber,
        "CorporateID" :req.body.CorporateID,
        "WalletType":"FOOD",
        "UserID" :req.session.user.email,
        "Country" :"KENYA"
        }
    })


    const str = `FORMID|JSONDATA|JSONDATA|${data}`;
    const results = await sendData(process.env.TESTURL, str);

    console.log(results)

   if(results[0].Status === "091"){

       return res.status(403).json({"message":results[0].Message});
   }

      return res.status(200).json({"message":results[0].Message});

		
})

module.exports = router;