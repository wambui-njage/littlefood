module.exports = (sequelize, Sequelize) => {
    return sequelize.define(
      "CorporateAdmin",
      {
        
        
        AdminID: { type: Sequelize.STRING, primaryKey: true },
        CorporateID: Sequelize.STRING,
        CreatedOn: Sequelize.DATE,
        EMailID: Sequelize.STRING,
        CompanyDomain: Sequelize.STRING,
        MobileNumber: Sequelize.STRING,
        SendDailyEMails: Sequelize.STRING,
        
        
      },
      { timestamps: false, defaultPrimaryKey: false, freezeTableName: true }
    );
  };
