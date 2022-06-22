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
router.post("/interviewlist", userController.verifyToken, interviewController.getInterviewList, (req, res) => {
  console.log("end of interviewList router");
  console.log(res.locals.interviewList);
  return res.status(200).json(res.locals.interviewList);
});

// get a specific algo
// req.body.token
router.post("/createinterview", userController.verifyToken, interviewController.createInterviewList, (req, res) => {
  console.log("end of createInterview router");
  console.log(res.locals.getAlgoList);
  return res.status(200).json(res.locals.getAlgoList);
});


// create algo
router.delete("/deleteinterview", userController.verifyToken, interviewController.deleteInterviewList, (req, res) => {
  console.log("end of deleteInterview router");
  console.log(res.locals.getAlgoList);
  return res.status(200).json(res.locals.getAlgoList);
});

// delete algo
router.post("/editinterview", userController.verifyToken, algoController.getAlgoList, (req, res) => {
  console.log("end of editInterview router");
  console.log(res.locals.getAlgoList);
  return res.status(200).json(res.locals.getAlgoList);
});

module.exports = router;