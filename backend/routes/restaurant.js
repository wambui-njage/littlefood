const express = require('express');
const router = express.Router();
const Sequelize = require("sequelize");
const { Restaurant } = require("../config/db");


router.get('/', async (req, res) => {

  try {

    const hotels = await Restaurant.findAll();
    return res.status(200).json(hotels);
    
  } catch (error) {

    return res.status(500).json({});
    
  }

    
});

router.get('/:id', async (req, res) => {

  try {

    const hotels = await Restaurant.findOne({ where: { RestaurantID:req.params.id } });

    if(!hotels)  return res.status(404).json({});

    return res.status(200).json(hotels);
    
  } catch (error) {

    console.log(error)

    return res.status(500).json({});
    
  }

    
});

module.exports = router;