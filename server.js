var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");

var PORT = process.env.PORT || 8080;

var jsonParser = bodyParser.json();

var urlencodedParser = bodyParser.urlencoded({ extended: false});

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))
 
// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
 
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))

require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
    console.log("Listening on PORT: " + PORT);
});