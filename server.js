'use strict';

var express = require('express');
var app = express();

app.use(express.static('public'));

app.get("/api", function(req, res) {
  res.send("Hello from API");
});

app.use(function(req, res){
  res.status(404).send("Not Found");
});

app.listen('3000', function(){
  console.log("Listening on port 3000");
});
