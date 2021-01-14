const express = require("express");
const router = express.Router();
const { sendData ,  sendDataDecrypt} = require('../utils');
const { CorporateWallet } = require("../config/db");


router.post('/', async (req, res) => {

    if(req.body.LimitType === "L"){

        const load = await loadWallet(req);

        // await CorporateWallet.create({ 
        
                 
        //             CorporateID:req.body.CorporateID, 
        //             WalletType:"MERCHANT", 
        //             SubWalletType:"FOOD", 
        //             MobileNumber:req.body.CorporateID, 
        //             WalletName:"Corporate Food", 
        //             Country:"KENYA", 
        //             DailyLimit:0.00, 
        //             WeeklyLimit:0.00, 
        //             MonthlyLimit:0.00, 
        //             OneTimeLimit:0.00,    
        //             UserID:req.session.user.email 
            
        //     })

        if(load[0].Status === "091"){

            return res.status(403).json({"message":"Something went wrong :( "});
        }
           await sendSMS( req.body.MobileNumber , `Great news your little corporate food wallet has been credited with Ksh ${req.body.Amount}`)
     
           return res.status(200).json({"message":"Wallet loaded successfully "});
    }

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
      await sendSMS( req.body.MobileNumber , `Great news your little corporate food wallet has been credited with Ksh ${req.body.Amount}`)

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




async function sendSMS(nums,msg){

     const str = `FORMID|SENDSMS_V1|UNIQUEID|SEVERITYLEVEL1|DEVICETYPE|SERVER|IMEI|SERVER|DEVICETOKEN|SERVER|MOBILENUMBER|${nums}|MESSAGE|${msg}`;
     const results = await sendDataDecrypt(process.env.FBURL, str);

     return results;

}

async function loadWallet(request){

    const data = JSON.stringify({
        "FormID":"LOADWALLET",
        "UserID": request.session.user.email,
        "IPNumber":request.ip,
        "Country":"KENYA",
        "LoadWallet":{
           "MobileNumber":request.body.MobileNumber,
           "WalletID":"FOOD",
           "CorporateID":request.body.CorporateID,
           "Description":`Corporate Food For ${request.body.CorporateID} by ${request.session.user.email}`,
           "Amount":request.body.Amount
        }
     })


    const str = `FORMID|JSONDATA|JSONDATA|${data}`;
    const results = await sendData(process.env.TESTURL, str);
    console.log(request.ip)
    return results;

}




module.exports = router;