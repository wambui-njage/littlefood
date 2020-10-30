module.exports = (sequelize, Sequelize) => {
    return sequelize.define(
      "Riders",
      {

            MobileNumber : { type: Sequelize.STRING, primaryKey: true },
            EMailID : Sequelize.STRING,
            FullName : Sequelize.STRING
        
      },
      { timestamps: false, defaultPrimaryKey: false, freezeTableName: true }
    );
    
  };
  