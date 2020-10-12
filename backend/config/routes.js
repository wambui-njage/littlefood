const express = require("express");
// const auth = require("../middleware/auth");
const restaurant = require("../routes/restaurant");
const reports = require("../routes/reports");
const bodyParser = require('body-parser');
const cors = require('cors');
// const flash = require('cookie-parser');

// var { beforeReceive, beforeSend } = require("../middleware/crypto");

module.exports = function(app) {
  app.use(express.static("public"));
  app.use(bodyParser.urlencoded({
    extended: true
}));
// app.use(cookieParser('keyboard cat'));
// app.use(session({ cookie: { maxAge: 60000 }}));
// app.use(flash());

// app.use(function(req, res, next) {
//   res.locals.roles = req.session.roles;
//   next();
// });
app.use(cors());
app.use("/api/restaurant", restaurant);
app.use("/api/reports", reports);
 
};
