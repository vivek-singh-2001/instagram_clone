const express = require("express");
// const cors = require("cors");




// USE MODULES HERE
const app = express();
// app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());


// USE ROUTES HERE


// ERROR HANDLER MUST BE DEFINED LAST


module.exports = app;
