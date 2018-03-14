var express = require('express');
var app = express();
var server = require('http').createServer(app);

app.use("/dependencies", express.static("node_modules"));
app.use("/client", express.static("client"));
app.use("/dist", express.static("dist"));
app.use("/", express.static("client/views"));


server.listen(80);