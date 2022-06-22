const db = require('../models/trackerModel');

const interviewController = {};

interviewController.getInterviewList = (req, res, next) => {
  //res.locals.userid will hold the id of the user
  db.query("SELECT * FROM interviews WHERE userid = $1")
    .then((data, [res.locals.userid]) => {
      return next();
    })
    .catch ((err) => {
      const errorObj = {
        log: 400,
        message: `Error with interviewController.getInterviewList ${err}`,
      };
    });
};




