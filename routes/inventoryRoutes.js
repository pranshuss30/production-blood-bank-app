const express = require("express");
   
       
const authMiddleware = require("../middlewares/authMiddleware");
const { createInventoryController,getInventoryController, getDonarsController, getHospitalController, getOrgnaisationController, getOrgnaisationForHospitalController, getInventoryHospitalController, getRecentInventoryController, } = require("../controllers/inventoryController");
const router = express.Router();
//routes
//Add  inventory
router.post("/create-inventory",authMiddleware,createInventoryController);
//get all blood records
router.get("/get-inventory",authMiddleware,getInventoryController);
//get hospital blood records
router.post("/get-inventory-hospital",authMiddleware,getInventoryHospitalController);

//get donar records
router.get("/get-donars",authMiddleware,getDonarsController);

//get hospitals records
router.get("/get-hospitals",authMiddleware,getHospitalController);
//get org records
router.get("/get-orgnaisation",authMiddleware, getOrgnaisationController);
//GET orgnaisation RECORDS
router.get(
    "/get-orgnaisation-for-hospital",
    authMiddleware,
    getOrgnaisationForHospitalController
  ); 
//get recent blood records
router.get("/get-recent-inventory",authMiddleware,getRecentInventoryController);
      
module.exports = router;