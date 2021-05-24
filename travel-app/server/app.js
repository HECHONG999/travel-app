var express = require('express');
var path = require('path');

var app = express();
app.get("/travel/api", function(res, req) {
  console.log("res", res)
})
app.listen("4000", function() {
  console.log("服务已经启动")
})
