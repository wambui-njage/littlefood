module.exports = (sequelize, Sequelize) => {
    return sequelize.define(
      "CorporateWallet",
      {
        
        
        RowID: { type: Sequelize.STRING, primaryKey: true },
        CorporateID: Sequelize.STRING,
        MobileNumber: Sequelize.STRING,
        WalletName: Sequelize.STRING,
        WalletType: Sequelize.STRING,
        WalletUniqueID: Sequelize.STRING, // Heri added this
        // CorporateWallet: Sequelize.STRING, // Heri commented this
        SubWalletType: Sequelize.STRING,
        Country: Sequelize.STRING,
        DailyLimit: Sequelize.STRING,
        WeeklyLimit: Sequelize.STRING,
        MonthlyLimit: Sequelize.STRING,
        OneTimeLimit: Sequelize.STRING,
        UserID: Sequelize.STRING
        
        
      },
      { timestamps: false, defaultPrimaryKey: false, freezeTableName: true }
    );
  };