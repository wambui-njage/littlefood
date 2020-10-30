const express = require('express');
const router = express.Router();
const { User , CorporateAdmin , Corporate ,MerchantTransactions} = require("../config/db");
const bcrypt = require('bcrypt');
const session = require("express-session");
const Sequelize = require("sequelize");
require("dotenv").config();

router.post('/', async function(req, res, next) {

        const { email , password } = req.body;

        const account   = await User.findOne({ where: { email } });
        const corpid    = await CorporateAdmin.findOne({ where: {AdminID:account.RowID } });
        const corporate = await Corporate.findOne({ where: {CorporateID:corpid.CorporateID } });

        if (!account || bcrypt.compareSync(password, account.password.replace( '$2y$' ,'$2a$')) === false) {
            
            return res.status(400).json({"error":"unauthorized"});

        } else {

            req.session.user = account;
            req.session.corporate = corporate;
            req.session.save();
            return res.status(200).json({"message":"great"});
            
            
        }
   
});

router.get('/', async function(req, res, next) {

     
    if (req.session) {
        // delete session object
      sessionStorage.setItem('isAutheticated', false);
      req.session.destroy(function(err) {
        if(err) {
          return next(err);
        } else {
          return res.status(200).json({"message":"great"});
        }
      });
    }
  });

   

module.exports = router;
