const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
require("dotenv").config();

router.post('/', async function(req, res, next) {

        const { email , password } = req.body;

        const account = await User.findOne({ email });

      
        if (!account || !bcrypt.compareSync(password, account.passwordHash)) {
            
            return false;
        } else {
            
            return true;
        }
   
});

   

module.exports = router;
