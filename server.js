const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const mysql = require("mysql");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// Parsing middleware
// Parse app /x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended: false }));

// Parse app

app.use(bodyParser.json());

// Static files

app.use(express.static("public"));

// Template Engine

app.engine("hbs", exphbs.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");



const routes = require('./server/routes/user')
app.use('/', routes)

app.listen(port, () => {
  console.log(`Listening on the ${port}`);
});
