// dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;


// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.listen(PORT, function() {
    console.log("app listening on PORT " + PORT);
})

// requires and sets API routes in these file
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

