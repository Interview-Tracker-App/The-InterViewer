const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const { createProxyMiddleware } = require('http-proxy-middleware');


const PORT = 8000;
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


const db = require('./models/trackerModel');

// app.get('/api/cookie', (req, res) =>{
//   res.cookie.token = "123456";
// })
app.post("/api", (req, res) => {
  console.log('hu')
  console.log(req.cookies);
  res.cookie('token', 'hellowww');
  res.redirect('/');
});

// app.post("/api", (req, res) => {
//   console.log(req.cookies);
//   req.cookies.token = '123456';
//   console.log(req.cookies);
//   db.query("SELECT * from Users WHERE token=$1",[req.cookies.token])
//   .then((data) => {
//     const userObj = data.rows[0];
//     console.log('userobj', userObj);
//     res.locals.userid = userObj.id;
//   });
//   // db.query("INSERT INTO Users (email, imgurl, name, token) VALUES ('yh@gmail.com', 'awefae.jpg', 'sal', '123456')");  
// });

app.get(express.static(path.resolve(__dirname, "../public")));

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// global error handler
app.use((err, req, res) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
