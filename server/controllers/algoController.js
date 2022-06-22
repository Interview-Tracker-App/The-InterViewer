const db = require('../models/trackerModel');

const algoController = {};

algoController.getAlgoList = (req, res, next) => {
  //res.locals.userid will hold the id of the user
  // SELECT useralgos.userid, useralgos.algoid, algos.title FROM useralgos INNER JOIN algos ON useralgos.algoid = algos.id WHERE useralgos.userid = $1
  db.query("SELECT useralgos.userid, useralgos.algoid, algos.title FROM useralgos INNER JOIN algos ON useralgos.algoid = algos.id WHERE useralgos.userid = $1")
    .then((data, [res.locals.userid]) => {
      return next();
    })
    .catch((err) => {
      const errorObj = {
        log: 400,
        message: `Error with algoController.getAlgoList ${err}`,
      };
    });
};

algoController.getAlgo = (req, res, next) => {
  //res.locals.algoid will hold the id of the algo
  db.query("SELECT * FROM algos INNER JOIN codes ON algos.id = codes.algoid WHERE algos.id = $1")
    .then((data, [res.locals.algoid]) => {
      return next();
    })
    .catch((err) => {
      const errorObj = {
        log: 400,
        message: `Error with algoController.getAlgo ${err}`,
      };
    });
};

algoController.createAlgo = (req, res, next) => {
  const { title, problem, notes, createdAt, timescompleted } = req.body;
  const query = "INSERT INTO algos (title, problem, notes, createdAt, timescompleted) VALUES ($1, $2, $3, $4, $5)";
  db.query(query, [title, problem, notes, createdAt, timescompleted])
    .then((data) => {
      return next();
    })
    .catch((err) => {
      const errorObj = {
        log: 400,
        message: `Error with algoController.createAlgo ${err}`,
      };
    });
};

algoController.deleteAlgo = (req, res, next) => {
  // req.body.algoid
  db.query("DELETE FROM algos WHERE id = $1", [req.body.algoid])

}

export default algoController;