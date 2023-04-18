const db = require('../models/trackerModel.js');
const bcrypt = require('bcrypt');
const userController = {};
const SALT = 5; 
const TOKENSALT = 3; 

userController.createUser = (req, res, next) => {
  const { username, password, password2 } = req.body;
  if (password !== password2) return next({msg:"passwords do not match"});
  bcrypt.hash(password, SALT, function (err, hashedPassword) {
    const query = "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *";  
    db.query(query, [username, hashedPassword])
      .then(data => {
        return next();
      })
      .catch(err => {
        const errorObj = {
          log: 'error in userController.createUser',
          message: `server error ${err}`
        };
        return next(errorObj);
      })
  });
};

userController.verifyUser = (req, res, next) => {
  const { username, password } = req.body;
  const query = 'SELECT password FROM users WHERE username = $1';
  db.query(query, [username])
    .then(data => {
      bcrypt.compare(password, data.rows[0].password, function (err, result) {
        if (result) {
          return next();
        }
        console.log('Password does not match.');
        return next({message: 'Password does not match, try again.'});
      });
    })
    .catch(err => {
      const errorObj = {
        log: 'error in userController.verifyUser',
        message: `server error ${err} `
      };
      return next(errorObj);
    })
};

userController.removeToken = (req, res, next) => {
  const query = 'UPDATE users SET token=$1 WHERE token=$2';
  db.query(query, [null, req.body.token])
    .then(data => {
      console.log('removed');
      next();
    })
    .catch(err => {
      const errorObj = {
        log: 'error in userController.removeToken',
        message: `server error ${err} `
      };
      return next(errorObj);
    })
};

userController.setToken = (req, res, next) => {
  const { username } = req.body
  bcrypt.hash(username, TOKENSALT, function (err, token) {
    console.log('token',token);
    console.log('username',username);
    const query = "UPDATE users SET token=$1 WHERE username=$2 RETURNING *";  
    db.query(query, [token, username])
      .then(data => {
        res.locals.user = data.rows[0];
        return next();
      })
      .catch(err => {
        const errorObj = {
          log: 'error in userController.setToken',
          message: `server error ${err}`
        };
        return next(errorObj);
      })
  });
};

userController.verifyToken = (req, res, next) => {
  const { token } = req.body;
  const query = 'SELECT * FROM users WHERE token = $1';
  db.query(query, [token])
    .then(data => {
      console.log(data.rows[0]);
      res.locals.userid = data.rows[0].id;
      res.locals.username = data.rows[0].username;
      return next();
    })
    .catch(err => {
      const errorObj = {
        log: 'error in userController.verifyToken',
        message: `server error ${err} `
      };
      return next(errorObj);
    })
};

module.exports = userController;