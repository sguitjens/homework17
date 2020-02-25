var express = require('express');
var app = express();

app.get('/', function (req, res) {
  console.log(req.body);
  res.render("index.js");
})
