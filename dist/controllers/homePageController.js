"use strict";
var path = require("path");
var HomePage = (function () {
    function HomePage() {
    }
    HomePage.prototype.getHomePage = function (req, res, next) {
        var new_path = path.join(__dirname, '../views/index.html');
        res.sendFile(new_path);
    };
    HomePage.prototype.getApiPage = function (req, res, next) {
        res.send("this is a API Page");
    };
    return HomePage;
}());
exports.HomePage = HomePage;
