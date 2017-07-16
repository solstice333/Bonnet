"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/map");
var BackendService = (function () {
    function BackendService(http) {
        this.http = http;
        this.url = 'api/items';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    BackendService.prototype._getSearchUrl = function (term) {
        return "app/items/?name=" + term;
    };
    BackendService.prototype.getAll = function (type) {
        return this.http.get(this.url)
            .toPromise()
            .then(function (resp) { return resp.json().data; });
    };
    BackendService.prototype.get = function (type, id) {
        return this.http.get(this.url + "/" + id)
            .toPromise()
            .then(function (resp) { return resp.json().data; });
    };
    BackendService.prototype.update = function (item) {
        return this.http
            .put(this.url + "/" + item.id, JSON.stringify(item), { headers: this.headers })
            .toPromise()
            .then(function () { return item; });
    };
    BackendService.prototype.create = function (name) {
        return this.http
            .post(this.url, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(function (resp) { return resp.json().data; });
    };
    BackendService.prototype.delete = function (id) {
        return this.http.delete(this.url + "/" + id, { headers: this.headers })
            .toPromise()
            .then(function () { return null; });
    };
    BackendService.prototype.search = function (term) {
        return this.http.get(this._getSearchUrl(term))
            .map(function (resp) { return resp.json().data; });
    };
    return BackendService;
}());
BackendService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], BackendService);
exports.BackendService = BackendService;
//# sourceMappingURL=backend.service.js.map