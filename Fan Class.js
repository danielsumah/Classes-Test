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
var _Fan_speed, _Fan_radius, _Fan_color, _Fan_on;
class Fan {
    constructor(speed = 1, radius = 5, color = 'blue', on = false) {
        _Fan_speed.set(this, void 0);
        _Fan_radius.set(this, void 0);
        _Fan_color.set(this, void 0);
        _Fan_on.set(this, void 0);
        __classPrivateFieldSet(this, _Fan_speed, speed, "f");
        __classPrivateFieldSet(this, _Fan_radius, radius, "f");
        __classPrivateFieldSet(this, _Fan_color, color, "f");
        __classPrivateFieldSet(this, _Fan_on, on, "f");
    }
    getSpeed() {
        if (__classPrivateFieldGet(this, _Fan_speed, "f") == 1) {
            return "SLOW";
        }
        else if (__classPrivateFieldGet(this, _Fan_speed, "f") == 2) {
            return "MEDIUM";
        }
        else {
            return "FAST";
        }
    }
    get radius() {
        return __classPrivateFieldGet(this, _Fan_radius, "f");
    }
    get color() {
        return __classPrivateFieldGet(this, _Fan_color, "f");
    }
    getStatus() {
        if (__classPrivateFieldGet(this, _Fan_on, "f") == true) {
            return "On";
        }
        else {
            return "Off";
        }
    }
    set speed(speed) {
        __classPrivateFieldSet(this, _Fan_speed, speed, "f");
    }
    set radius(radius) {
        __classPrivateFieldSet(this, _Fan_radius, radius, "f");
    }
    set color(color) {
        __classPrivateFieldSet(this, _Fan_color, color, "f");
    }
    set isOn(on) {
        __classPrivateFieldSet(this, _Fan_on, on, "f");
    }
}
_Fan_speed = new WeakMap(), _Fan_radius = new WeakMap(), _Fan_color = new WeakMap(), _Fan_on = new WeakMap();
const fan1 = new Fan(3, 10, 'yellow', true);
const fan2 = new Fan(2, 5, 'blue', false);
console.log("Fan1 \nspeed\t", fan1.getSpeed(), "\nradius\t", fan1.radius, "\ncolor\t", fan1.color, "\nOn/Off\t", fan1.getStatus());
console.log("\n\nFan2 \nspeed\t", fan2.getSpeed(), "\nradius\t", fan2.radius, "\ncolor\t", fan2.color, "\nOn/Off\t", fan2.getStatus());
