"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var Decoder = /** @class */ (function () {
    function Decoder(abis) {
        var _this = this;
        if (abis === void 0) { abis = []; }
        this.interfaces = new Array();
        abis.forEach(function (abi) {
            var methodInterface = new types_1.Interface(abi);
            _this.interfaces.push(methodInterface);
        });
    }
    return Decoder;
}());
exports.default = Decoder;
