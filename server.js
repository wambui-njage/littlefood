const express = require("express");
const session = require("express-session");
const app = express();
const port = 4035;
const path = require('path');

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true
    // cookie: { secure: true }
  })
);

app.use(express.static(__dirname + '/build/'));
//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// require("./config/db");
require("./backend/config/routes")(app);

app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/build/index.html'));
});

app.listen(port);
