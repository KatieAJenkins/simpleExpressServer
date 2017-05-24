'use strict';

var express = require('express');
var app = express();

app.get("/api", function(req, res) {
  res.send("Hello from API")
})


app.listen('3000', function(){
  console.log("Listening on port 3000");
});
