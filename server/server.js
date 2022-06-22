// const express = require("express");
// const bodyParser = require("body-parser");
// const path = require("path");

// const PORT = 3000;
// const app = express();

// // const apiRouter = require("./routes/api");

// app.use(express.json());
// app.use(express.urlencoded());
// app.use(bodyParser.urlencoded({ extended: false }));

// app.use(express.static(path.resolve(__dirname, "../public")));

// // app.use("/api", apiRouter);

// app.use("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/index.html"));
// });

// // global error handler
// app.use((err, req, res) => {
//   const defaultErr = {
//     log: "Express error handler caught unknown middleware error",
//     status: 500,
//     message: { err: "An error occurred" },
//   };
//   const errorObj = Object.assign({}, defaultErr, err);
//   console.log(errorObj.log);
//   return res.status(errorObj.status).json(errorObj.message);
// });

// app.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });

// module.exports = app;