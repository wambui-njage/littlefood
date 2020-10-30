const express = require("express");
const app = express();
const port = 4035;

const auth = require("./backend/middleware/auth");

app.set('trust proxy', 1) // trust first proxy

app.use(express.static(__dirname + '/build/'));
//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// require("./config/db");
require("./backend/config/routes")(app);


app.listen(port);
