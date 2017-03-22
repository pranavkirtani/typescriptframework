"use strict";
var path = require("path");
var requestController = (function () {
    function requestController() {
    }
    requestController.prototype.getHomePage = function (req, res, next) {
        var new_path = path.join(__dirname, '../views/index.html');
        res.sendFile(new_path);
    };
    requestController.prototype.getApiPage = function (req, res, next) {
        res.send("this is a API Page");
    };
    return requestController;
}());
exports.requestController = requestController;
