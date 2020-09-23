const express = require("express");
const session = require("express-session");
const app = express();
const port = 5000;

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true
    // cookie: { secure: true }
  })
);

app.use(express.static(__dirname + '/backend/public/'));
//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// require("./config/db");
require("./backend/config/routes")(app);

app.listen(port);
