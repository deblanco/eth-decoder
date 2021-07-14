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
var types_1 = require("./types");
var decoder_1 = __importDefault(require("./decoder"));
var TxDecoder = /** @class */ (function (_super) {
    __extends(TxDecoder, _super);
    function TxDecoder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TxDecoder.prototype.decodeTx = function (tx) {
        for (var i = 0; i < this.interfaces.length; i++) {
            var iface = this.interfaces[i];
            var parsedTransaction = iface.parseTransaction(tx);
            if (parsedTransaction) {
                var abiFunction = iface.functions[parsedTransaction.name] ||
                    iface.functions[parsedTransaction.signature];
                var parsedArgs = types_1.defaultAbiCoder.decode(abiFunction.inputs, "0x" + tx.data.substring(10));
                return __assign({ parsedArgs: parsedArgs }, parsedTransaction);
            }
        }
        return null;
    };
    return TxDecoder;
}(decoder_1.default));
exports.default = TxDecoder;
