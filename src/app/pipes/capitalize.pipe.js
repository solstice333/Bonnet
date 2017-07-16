"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
// capitalize strings. |value| is required. If only |value| is supplied, 
// the first character of the string is capitalized. |start| is optional
// and if supplied represents the index of the character to capitalize.
// |end| is optional, and if supplied, capitalizes the range of characters
// between |start| and |end|, where |end| is exclusive.
var CapitalizePipe = (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (value, start, end) {
        if (start === void 0) { start = 0; }
        if (end === void 0) { end = start + 1; }
        var result = "";
        var buf = value.split('');
        buf.forEach(function (val, i) {
            return result += i >= start && i < end ? val.toUpperCase() : val;
        });
        return result;
    };
    return CapitalizePipe;
}());
CapitalizePipe = __decorate([
    core_1.Pipe({ name: 'capitalize' })
], CapitalizePipe);
exports.CapitalizePipe = CapitalizePipe;
//# sourceMappingURL=capitalize.pipe.js.map