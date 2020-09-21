module.exports = (sequelize, Sequelize) => {
    return sequelize.define(
      "restaurantmenu",
      {

            MenuID : { type: Sequelize.STRING, primaryKey: true },
            RestaurantID : Sequelize.STRING,
            DisplayOrder : Sequelize.STRING,
            FoodName : Sequelize.STRING,
            FoodDescription : Sequelize.STRING,
            OriginalPrice : Sequelize.STRING,
            SpecialPrice : Sequelize.STRING,
            FoodImage : Sequelize.STRING

        
      },
      { timestamps: false, defaultPrimaryKey: false, freezeTableName: true }
    );
  };
  