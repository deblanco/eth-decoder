"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var decoder_1 = __importDefault(require("./decoder"));
var types_1 = require("./types");
var LogDecoder = /** @class */ (function (_super) {
    __extends(LogDecoder, _super);
    function LogDecoder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LogDecoder.prototype.decodeLogs = function (logs) {
        var _this = this;
        if (logs === void 0) { logs = []; }
        return logs.map(function (log) {
            for (var i = 0; i < _this.interfaces.length; i++) {
                var iface = _this.interfaces[i];
                try {
                    var parsedLog = iface.parseLog(log);
                    if (parsedLog) {
                        return new types_1.ParsedLogDescription(__assign(__assign({}, parsedLog), { address: log.address.toLowerCase(), event: parsedLog.name }));
                    }
                }
                catch (e) {
                    // ignore
                }
            }
            return null;
        })
            .filter(function (obj) { return obj !== null; });
    };
    return LogDecoder;
}(decoder_1.default));
exports.default = LogDecoder;
