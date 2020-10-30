const express = require("express");
const session = require("express-session");
const restaurant = require("../routes/restaurant");
const reports = require("../routes/reports");
const login = require("../routes/login");
const wallet = require("../routes/wallet");
const auth = require("../middleware/auth");
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
// const flash = require('cookie-parser');

// var { beforeReceive, beforeSend } = require("../middleware/crypto");

module.exports = function(app) {
  app.use(express.static("public"));
  app.use(bodyParser.urlencoded({
    extended: true
}));
// app.use(cookieParser('keyboard cat'));
app.use(session({
  secret: 'kulachakula',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: true ,
    // expires : new Date(Date.now() + 3600000),
    maxAge:1*60*60*1000,
    secure: false 
  },
  
}))
// app.use(flash());

// app.use(function(req, res, next) {
//   res.locals.roles = req.session.roles;
//   next();
// });
app.use(cors());
app.use("/api/restaurant",auth,restaurant);
app.use("/api/reports",auth,reports);
app.use("/api/wallet",wallet);
app.use("/api/login",login);
app.get('*', auth ,(req,res) =>{
  res.sendFile(path.join(__dirname,'..', '..', '/build/index.html'));
});

 
};
