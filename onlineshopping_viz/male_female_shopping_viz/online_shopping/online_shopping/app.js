﻿var express = require('express');
var port = 3000;
var app = express();

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, function (req, res) {
    console.log("HEllo world");
});