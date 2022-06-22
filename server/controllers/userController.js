const db = require('../models/trackerModel');

const userController = {};

userController.verifyToken = (req, res, next) => {

  // check if the token was passed to the server
  if (req.cookies.token) {
    db.query("SELECT * from Users")
    .then((data) => {
      console.log(data);
      next();
    })
    .catch(err)
  } else {
    //reroute the client to the login page 
    console.log('hacker!');
  }
}


// userController.setToken = (req, res, next) => {
  
//   res.cookie.token = 'asdf;awioejf;j';

//   res.status(200)
// }


export default algoController;