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
router.get("/algolist", userController.verifyToken, algoController.getAlgoList, (req, res) => {
  console.log("end of algolist router");
  return res.status(200).json(res.locals.algolist);
});

// // get a specific algo
// // req.body.token
// // req.body.algoid
router.get("/algo", userController.verifyToken, algoController.getAlgo, (req, res) => {
  console.log("end of algo router");
  return res.status(200).json(res.locals.algo);
});


// // create algo
router.post("/createalgo", userController.verifyToken, algoController.createAlgo, algoController.createCode, (req, res) => {
  console.log("end of createalgo router");
  return res.status(200).json(res.locals);
});

// // delete algo
router.post("/deletealgo", userController.verifyToken, algoController.deleteAlgo, (req, res) => {
  console.log("end of deletealgo router");
  return res.status(200).json("Deleted Algo");
});

// // edit algo
// router.post("/editAlgo", userController.verifyToken, algoController.getAlgoList, (req, res) => {
//   console.log("end of editAlgo router");
//   console.log(res.locals.getAlgoList);
//   return res.status(200).json(res.locals.getAlgoList);
// });

// // create a new code
// {
//   "algoid": "1",
//   "code": "console.log('pleasework')",
//   "title": "used recursion",
//   "token": "$2b$04$y3HzatMEPrKAR7rQSS6k6.qr3fQM2RXr1Zgo8SDQhDPJzsZB5vVGC"
// }
router.post("/createcode", userController.verifyToken, algoController.createCode, (req, res) => {
  console.log("end of createcode router");
  return res.status(200).json(res.locals.getAlgoList);
});


// get a specific code
router.get("/code", userController.verifyToken, algoController.getCode, (req, res) => {
  console.log("end of code router");
  return res.status(200).json(res.locals.code);
});

// // get a specific code
// router.post("/code", userController.verifyToken, algoController.getAlgoList, (req, res) => {
//   console.log("end of code router");
//   console.log(res.locals.getAlgoList);
//   return res.status(200).json(res.locals.getAlgoList);
// });


// // create a new code
// router.post("/code", userController.verifyToken, algoController.getAlgoList, (req, res) => {
//   console.log("end of code router");
//   console.log(res.locals.getAlgoList);
//   return res.status(200).json(res.locals.getAlgoList);
// });


// delete a code


// edit a code



module.exports = router;