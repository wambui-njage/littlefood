module.exports = (sequelize, Sequelize) => {
    return sequelize.define(
      "Riders",
      {

            MobileNumber : { type: Sequelize.STRING, primaryKey: true , allowNull: false},
            EMailID : Sequelize.STRING,
            FullName : Sequelize.STRING,
            ProfilePicture : Sequelize.STRING,
        
      },
      { timestamps: false, defaultPrimaryKey: false, freezeTableName: true }
    );
    
  };
  