"use strict";
var express = require("express");
var requestController_1 = require("../controllers/requestController");
var api_1 = require("./api");
var Route = (function () {
    function Route() {
    }
    Route.prototype.routes = function () {
        var router = express.Router();
        var requestPageController = new requestController_1.requestController();
        router.get('/', requestPageController.getHomePage);
        router.use('/api', api_1.api_router);
        return router;
    };
    return Route;
}());
exports.router = new Route().routes();
