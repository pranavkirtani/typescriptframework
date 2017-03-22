"use strict";
var express = require("express");
var index_1 = require("./routes/index");
var path = require("path");
var Server = (function () {
    function Server() {
        this.app = express();
        this.app.listen(3000);
        this.app.use(index_1.router);
        var new_path = path.join(__dirname, '../');
        this.app.use(express.static(new_path));
        console.log("listetning on server 3000");
    }
    return Server;
}());
var serverInstance = new Server();
