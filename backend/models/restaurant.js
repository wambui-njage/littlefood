module.exports = (sequelize, Sequelize) => {
    return sequelize.define(
      "resturants",
      {
        
        
        RestaurantID: { type: Sequelize.STRING, primaryKey: true },
        RestaurantName: Sequelize.STRING,
        TypeOfRestaurant: Sequelize.STRING,
        Longitude: Sequelize.STRING,
        Latitude: Sequelize.STRING,
        Image: Sequelize.STRING,
        
        
      },
      { timestamps: false, defaultPrimaryKey: false, freezeTableName: true }
    );
  };
  