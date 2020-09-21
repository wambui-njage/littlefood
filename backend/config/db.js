require("dotenv").config();
const Sequelize = require("sequelize");
const RestaurantModel = require("../models/restaurant");
const RestaurantMenuModel = require("../models/restaurantmenu");


const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PWD,


  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    // driver: "tedious",
    // operatorsAliases: false,
    // dialectOptions: {
    //   options: { encrypt: true }
    // },
    port: parseInt(process.env.DB_PORT),
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to DB...");
  })

  .catch(err => {
    console.log("Error! Could not Connected to DB..." + err);
  });



const Restaurant = RestaurantModel(sequelize, Sequelize);
const RestaurantMenu = RestaurantMenuModel(sequelize, Sequelize);

module.exports = {
  Restaurant,
  RestaurantMenu
};
