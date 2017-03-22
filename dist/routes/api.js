"use strict";
var express = require("express");
var requestController_1 = require("../controllers/requestController");
var Api = (function () {
    function Api() {
    }
    Api.prototype.APiRoutes = function () {
        var router = express.Router();
        var requestPageController = new requestController_1.requestController();
        router.get('/', requestPageController.getApiPage);
        return router;
    };
    return Api;
}());
//var router= new Api().APiRoutes();
exports.api_router = new Api().APiRoutes();
