const express = require('express');
const router = express.Router();
const { Op } = require("sequelize");
const { CorporateRider , Rider , Corporate ,CorporateWallet } = require("../config/db");


router.get('/', async (req, res) => {

  let corps = await Corporate.findAll({
    where: { ParentID: req.session.corporate.CorporateID } ,
    attributes: ['CorporateID'],
    raw : true
})
.then(corporates => corporates.map(corporate => corporate.CorporateID));

  if (!corps) corps = [req.session.corporate.CorporateID]

  try {

    const staff = await CorporateRider.findAll({ 
        // where: { CorporateID:req.params.id } ,
        include: [{
            model: Rider,
            required: true,
            attributes: ["ProfilePicture","FullName"],
            

          },
          {
            model: Corporate,
            required: true,
            attributes: ["Name"],
            

          },
          {
            model: CorporateWallet,
            required: false,
            where: {
              CorporateID: { [Op.in]:  corps},
              WalletType:'MERCHANT',
              SubWalletType:'FOOD'
            }
            

          }
          ],

        where: { CorporateID: { [Op.in]:  corps} ,Suspended:"0"} ,

        
        
        });

    if(!staff)  return res.status(404).json({error:"not found"});

    return res.status(200).json(staff);
    
  } catch (error) {


    return res.status(500).json({error});
    
  }

    
});


module.exports = router;