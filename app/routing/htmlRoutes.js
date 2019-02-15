// dependencies
var express = require("express");
var path = require("path");

// exports the variable
// route for home page
module.exports = function (app) {
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

    // Route for survey page
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });
}