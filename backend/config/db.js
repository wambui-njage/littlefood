require("dotenv").config();
const Sequelize = require("sequelize");
const RestaurantModel = require("../models/restaurant");
const RestaurantMenuModel = require("../models/restaurantmenu");
const UserModel = require("../models/users");
const CorporateAdminModel = require("../models/corporateadmin");
const MerchantTransactionsModel = require("../models/transactions");
const CorporateModel = require("../models/corporate");
const RiderModel = require("../models/rider");
const CorporateRiderModel = require("../models/corporaterider");
const CorporateWalletModel = require("../models/corporatewallet");


const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PWD,


  {
    host: process.env.DB_HOST,
    dialect: "mssql",
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
const User = UserModel(sequelize, Sequelize);
const CorporateAdmin = CorporateAdminModel(sequelize, Sequelize);
const MerchantTransactions = MerchantTransactionsModel(sequelize, Sequelize);
const Corporate = CorporateModel(sequelize, Sequelize);
const Rider = RiderModel(sequelize, Sequelize);
const CorporateRider = CorporateRiderModel(sequelize, Sequelize);
const CorporateWallet = CorporateWalletModel(sequelize, Sequelize);

//relationships

Rider.hasMany(MerchantTransactions, {foreignKey: 'MobileNumber'}); 
CorporateRider.belongsTo(Rider, {foreignKey: 'MobileNumber'}); 
CorporateRider.belongsTo(CorporateWallet,  {foreignKey: 'MobileNumber', targetKey: 'MobileNumber' }); 
CorporateRider.belongsTo(Corporate, {foreignKey: 'CorporateID', targetKey: 'CorporateID' }); 

module.exports = {
  Restaurant,
  RestaurantMenu,
  User,
  CorporateAdmin,
  MerchantTransactions,
  Corporate,
  Rider,
  CorporateRider,
  CorporateWallet

};
