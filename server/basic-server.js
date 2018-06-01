const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const path = require("path");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "../client/dist")));

app.listen(3001, () => console.log("Header listening at 3001"));
