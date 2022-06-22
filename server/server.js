const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const algoApiRouter = require("./routes/algoApi");
const interviewApiRouter = require("./routes/interviewApi");
const userApiRouter = require("./routes/userApi");

const PORT = 8000;
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

////temp
const db = require('./models/trackerModel.js');
app.use("/getusers", (req, res) => {
  db.query('SELECT * FROM users')
  .then((data) => {
    res.locals.data = data.rows;
    res.status(200).json(res.locals.data);
  })
});
app.use("/getinterview", (req, res) => {
  db.query('SELECT * FROM interview')
  .then((data) => {
    res.locals.data = data.rows;
    res.status(200).json(res.locals.data);
  })
});
app.use("/getalgos", (req, res) => {
  db.query('SELECT * FROM algos')
  .then((data) => {
    res.locals.data = data.rows;
    res.status(200).json(res.locals.data);
  })
});
app.use("/getuseralgos", (req, res) => {
  db.query('SELECT * FROM useralgos')
  .then((data) => {
    res.locals.data = data.rows;
    res.status(200).json(res.locals.data);
  })
});
app.use("/getcodes", (req, res) => {
  db.query('SELECT * FROM codes')
  .then((data) => {
    res.locals.data = data.rows;
    res.status(200).json(res.locals.data);
  })
});
////temp



app.use("/api/algo", algoApiRouter);
app.use("/api/interview", interviewApiRouter);
app.use("/api/user", userApiRouter);

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
