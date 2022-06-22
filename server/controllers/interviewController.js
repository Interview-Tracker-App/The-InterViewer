const db = require('../models/trackerModel');

const interviewController = {};

interviewController.getInterviewList = (req, res, next) => {
  //res.locals.userid will hold the id of the user
  const { userid } = res.locals;
  console.log(userid);
  const query = "SELECT * FROM interview WHERE userid = $1";
  db.query(query, [userid])
    .then((data) => {
      console.log('data', data.rows);
      res.locals.interviewList = data.rows;
      return next();
    })
    .catch ((err) => {
      const errorObj = {
        log: 400,
        message: `Error with interviewController.getInterviewList ${err}`,
      };
    });
};

// {
//   "company": "GOOGLE",
//   "interviewtime": 2022-06-21 19:10:25 +0000,
//   "source": "Google",
//   "contactname": "Joseph",
//   "contactinfo": "Joe",
//   "jobrole": "Senior Engineer",
//   "joburl": "Google.com",
//   "notes": "keep it up",
//   "token": "$2b$04$y3HzatMEPrKAR7rQSS6k6.qr3fQM2RXr1Zgo8SDQhDPJzsZB5vVGC"
// }

interviewController.createInterviewList = (req, res, next) => {
  //res.locals.userid will hold the id of the user
  const { company, interviewtime, source, contactname, contactinfo, jobrole, joburl, applicationtime, notes, status } = req.body;
  console.log(company, interviewtime, source, contactname, contactinfo, jobrole, joburl, applicationtime, notes, status );
  const query = "INSERT INTO interview (company, interviewtime, source, contactname, contactinfo, jobrole, joburl, applicationtime, notes, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *";
  db.query(query, [company, interviewtime, source, contactname, contactinfo, jobrole, joburl, applicationtime, notes, status])
    .then((data) => {
      console.log(data.rows)
      console.log("Creating an interview")
      return next();
    })
    .catch ((err) => {
      const errorObj = {
        log: 400,
        message: `Error with interviewController.createInterviewList ${err}`,
      };
    });
};

interviewController.deleteInterviewList = (req, res, next) => {
  //res.locals.userid will hold the id of the user
  const { interviewid } = req.body;
  const query = "DELETE FROM interviews WHERE id = $1"
  db.query(query, [interviewid])
    .then((data) => {
      return next();
    })
    .catch ((err) => {
      const errorObj = {
        log: 400,
        message: `Error with interviewController.deleteInterviewList ${err}`,
      };
    });
};

module.exports = interviewController;