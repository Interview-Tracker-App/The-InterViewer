const express = require("express");
const path = require("path");

const algoController = require("../controllers/algoController");
const interviewController = require("../controllers/interviewController");
const userController = require("../controllers/userController");

const router = express.Router();


// get algoList
// req.body.token
// res.locals.userid
// res.locals.getAlgoList
router.get("/algoList", userController.verifyToken, algoController.getAlgoList, (req, res) => {
  console.log(res.locals.getAlgoList);
  return res.status(200).json(res.locals.getAlgoList);
});

// get a specific algo
// req.body.token
// req.body.algoid
router.get("/algo", userController.verifyToken, algoController.getAlgoList, (req, res) => {
  console.log(res.locals.getAlgoList);
  return res.status(200).json(res.locals.getAlgoList);
});


// create algo


// delete algo


// edit algo


// get codeList


// get a specific code


// create a new code


// delete a code


// edit a code



module.exports = router;