module.exports = (sequelize, Sequelize) => {
    return sequelize.define(
      "Corporate",
      {
        
        
        CorporateID: { type: Sequelize.STRING, primaryKey: true },
        Name: Sequelize.STRING,
        Country: Sequelize.STRING,
        ParentID: Sequelize.STRING,
        email: Sequelize.STRING,
        ConfirmationCode: Sequelize.STRING,
        Confirmed: Sequelize.STRING,
        LevelID: Sequelize.STRING,
        Suspended: Sequelize.STRING,
        MakerChecker: Sequelize.STRING,
        Balance: Sequelize.STRING,
        AccountManagerID: Sequelize.STRING,
        CreatedOn: Sequelize.DATE,
        AllowedVehicleTypes: Sequelize.STRING
        
        
      },
      { timestamps: false, defaultPrimaryKey: false, freezeTableName: true }
    );
  };

