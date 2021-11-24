"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParsedLogDescription = exports.defaultAbiCoder = exports.Fragment = exports.Interface = void 0;
var abi_1 = require("@ethersproject/abi");
Object.defineProperty(exports, "Interface", { enumerable: true, get: function () { return abi_1.Interface; } });
Object.defineProperty(exports, "Fragment", { enumerable: true, get: function () { return abi_1.Fragment; } });
Object.defineProperty(exports, "defaultAbiCoder", { enumerable: true, get: function () { return abi_1.defaultAbiCoder; } });
var properties_1 = require("@ethersproject/properties");
var ParsedLog = /** @class */ (function (_super) {
    __extends(ParsedLog, _super);
    function ParsedLog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ParsedLog;
}(abi_1.LogDescription));
var ParsedLogDescription = /** @class */ (function (_super) {
    __extends(ParsedLogDescription, _super);
    function ParsedLogDescription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ParsedLogDescription;
}(properties_1.Description));
exports.ParsedLogDescription = ParsedLogDescription;
