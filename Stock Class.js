"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Stock_symbol, _Stock_name, _Stock_previousPrice, _Stock_currentPrice;
class Stock {
    constructor(symbol, name, previousPrice, currentPrice) {
        _Stock_symbol.set(this, void 0);
        _Stock_name.set(this, void 0);
        _Stock_previousPrice.set(this, void 0);
        _Stock_currentPrice.set(this, void 0);
        __classPrivateFieldSet(this, _Stock_symbol, symbol, "f");
        __classPrivateFieldSet(this, _Stock_name, name, "f");
        __classPrivateFieldSet(this, _Stock_previousPrice, previousPrice, "f");
        __classPrivateFieldSet(this, _Stock_currentPrice, currentPrice, "f");
    }
    get name() {
        return __classPrivateFieldGet(this, _Stock_name, "f");
    }
    get symbol() {
        return __classPrivateFieldGet(this, _Stock_symbol, "f");
    }
    get previousPrice() {
        return __classPrivateFieldGet(this, _Stock_previousPrice, "f");
    }
    get currentPrice() {
        return __classPrivateFieldGet(this, _Stock_currentPrice, "f");
    }
    set previousPrice(previousPrice) {
        __classPrivateFieldSet(this, _Stock_previousPrice, previousPrice, "f");
    }
    set currentPrice(currentPrice) {
        __classPrivateFieldSet(this, _Stock_currentPrice, currentPrice, "f");
    }
    getChangePercent() {
        const changePercent = ((__classPrivateFieldGet(this, _Stock_previousPrice, "f") - __classPrivateFieldGet(this, _Stock_currentPrice, "f")) / __classPrivateFieldGet(this, _Stock_previousPrice, "f")) * 100;
        return changePercent;
    }
}
_Stock_symbol = new WeakMap(), _Stock_name = new WeakMap(), _Stock_previousPrice = new WeakMap(), _Stock_currentPrice = new WeakMap();
const company = new Stock('INTC', 'Intel Corporation', 20.5, 20.35);
console.log("The price change percentage is", company.getChangePercent(), "percent.");
