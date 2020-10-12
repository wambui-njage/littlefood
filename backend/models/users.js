module.exports = (sequelize, Sequelize) => {
    return sequelize.define(
      "admin",
      {

            RowID : { type: Sequelize.STRING, primaryKey: true },
            FullName : Sequelize.STRING,
            email : Sequelize.STRING,
            password : Sequelize.STRING

        
      },
      { timestamps: false, defaultPrimaryKey: false, freezeTableName: true }
    );
  };
  