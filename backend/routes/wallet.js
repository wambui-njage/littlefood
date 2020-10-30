const express = require("express");
const router = express.Router();
const { sendData } = require('../utils');


router.post('/', async (req, res) => {

    const data = JSON.stringify({
        "FORMID":"ADDCORPORATEWALLET",
        "CorporateWallet":{
        "MobileNumber": 254721840501,
        "CorporateID" :"5984b46c565f1",
        "WalletType":"FOOD",
        "LimitType" :"D",
        "LimitAmount":100,
        "UserID" :"wambui.njagi@craftsilicon.com",
        "Country" :"KENYA"
        }
    })


    const str = 'FORMID|JSONDATA|JSONDATA|{"FORMID":"ADDCORPORATEWALLET","CorporateWallet":{"MobileNumber":254721840501,"CorporateID":"5984b46c565f1","WalletType":"FOOD","LimitType":"D","LimitAmount":100,"UserID":"wambui.njagi@craftsilicon.com","Country":"KENYA"}}';
    const results = await sendData(process.env.TESTURL, str);
    return res.send(results)

		
})

module.exports = router;