const db = require('../models/trackerModel');

const algoController = {};

algoController.getAlgoList = (req, res, next) => {
  const { userid } = res.locals
  db.query("SELECT useralgos.userid, useralgos.algoid, algos.title FROM useralgos INNER JOIN algos ON useralgos.algoid = algos.id WHERE useralgos.userid = $1", [userid])
    .then((data) => {
      res.locals.algoList = data.rows;
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
  //req.body.algoid will hold the id of the algo
  const { algoid } = req.body;
  console.log(algoid);
  db.query("SELECT algos.title as algotitle, algos.id as algoid, codes.title as codetitle, codes.id as codeid,  * FROM algos INNER JOIN codes ON algos.id = codes.algoid WHERE algos.id = $1", [algoid])
    .then((data) => {
      res.locals.algo = data.rows;
      console.log(res.locals.algo);
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
  const { algotitle, problem, notes } = req.body;
  const { userid } = res.locals;
  const date = new Date;
  const createdAt = date.toString().substring(4,25);
  // console.log(title, problem, notes, createdAt);
  const query = "INSERT INTO algos (title, problem, notes, createdat, timescompleted) VALUES ($1, $2, $3, $4, $5) RETURNING *";
  db.query(query, [algotitle, problem, notes, createdAt, '0'])
    .then((data) => {
      console.log('data', data.rows);
      res.locals.algoid = data.rows[0].id
      db.query("INSERT INTO useralgos (userid, algoid) VALUES ($1, $2)", [userid, res.locals.algoid])
        .then((data) => {
          return next();
        })
        .catch((err) => {
          const errorObj = {
            log: 400,
            message: `Error with algoController.createAlgo ${err}`,
          };
        });
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
  .then((data) => {
    return next();
  })
  .catch((err) => {
    const errorObj = {
      log: 400,
      message: `Error with algoController.deleteAlgo ${err}`,
    };
  });
};

algoController.getCode = (req, res, next) => {
  const { codeid } = req.body;
  db.query("SELECT * FROM codes WHERE id = $1", [codeid])
    .then((data) => {
      res.locals.code = data.rows[0];
      return next();
    })
    .catch((err) => {
      const errorObj = {
        log: 400,
        message: `Error with algoController.getAlgo ${err}`,
      };
    });
};

algoController.createCode = (req, res, next) => {
  const { code, codetitle } = req.body;
  const algoid = res.locals.algoid || req.body.algoid;
  const date = new Date;
  const createdAt = date.toString().substring(4,25);
  const query = "INSERT INTO codes (algoid, code, title, createdat) VALUES ($1, $2, $3, $4) RETURNING *";
  db.query(query, [algoid, code, codetitle, createdAt])
    .then((data) => {
      res.locals.code = data.rows[0];
      return next();
    })
    .catch((err) => {
      const errorObj = {
        log: 400,
        message: `Error with algoController.getAlgo ${err}`,
      };
    });
};



module.exports = algoController;