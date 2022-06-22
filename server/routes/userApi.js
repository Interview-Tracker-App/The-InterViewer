const express = require("express");
const path = require("path");

const algoController = require("../controllers/algoController");
const interviewController = require("../controllers/interviewController");
const userController = require("../controllers/userController");

const router = express.Router();

router.post("/createUser", 
  userController.createUser, 
  userController.setToken, 
  (req, res) => {
    console.log("end of createUser router");
    return res.status(200).json(res.locals.user.token);
});

router.post("/loginUser", 
  userController.verifyUser, 
  userController.setToken, (req, res) => {
    return res.status(200).json(res.locals.user.token);
});

router.post("/logoutUser", 
  userController.removeToken,  
  (req, res) => {
    return res.status(200).json('removed');
});

module.exports = router;

