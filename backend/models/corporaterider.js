module.exports = (sequelize, Sequelize) => {
    return sequelize.define(
      "CorporateRider",
      {

            RowID : { type: Sequelize.STRING, primaryKey: true },
            MobileNumber : Sequelize.STRING,
            CorporateID : Sequelize.STRING,
            SupervisedBy : Sequelize.STRING,
            CompanyEmail : Sequelize.STRING,
            OfficialName : Sequelize.STRING,
            Suspended : Sequelize.STRING
        
      },
      { timestamps: false, defaultPrimaryKey: false, freezeTableName: true }
    );
    
  };
  