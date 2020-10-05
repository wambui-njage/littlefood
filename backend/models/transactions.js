module.exports = (sequelize, Sequelize) => {
    return sequelize.define(
      "transactions",
      {

            RowID : { type: Sequelize.STRING, primaryKey: true },
            MobileNumber : Sequelize.STRING,
            EMailID : Sequelize.STRING,
            CorporateID : Sequelize.STRING,
            MerchantID : Sequelize.STRING,
            PaymentCode : Sequelize.STRING,
            TrxDate : Sequelize.DATE,
            TrxID : Sequelize.STRING,
            Description : Sequelize.STRING,
            Amount : Sequelize.STRING,
            PaymentMode : Sequelize.STRING,
            PaymentSource : Sequelize.STRING,
            PaymentAccount : Sequelize.STRING,
            WalletUniqueID : Sequelize.STRING,
            City : Sequelize.STRING,
            Country : Sequelize.STRING
        
      },
      { timestamps: false, defaultPrimaryKey: false, freezeTableName: true }
    );
  };
  