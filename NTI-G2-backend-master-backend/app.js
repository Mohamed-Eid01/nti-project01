"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var dotenv_1 = require("dotenv");
var mongoose_1 = require("mongoose");
var app = (0, express_1.default)();
dotenv_1.default.config();
app.use(express_1.default.json());
mongoose_1.default.connect(process.env.DB).then(function () {
    console.log("Database connected to : ".concat(process.env.DB));
}).catch(function (err) {
    console.log(err);
});
app.get('/', function (req, res) {
    res.json({ message: "Hello App" });
});
app.listen(process.env.PORT);
