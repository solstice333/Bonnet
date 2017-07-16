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
var item_1 = require("../item");
var logger_service_1 = require("./logger.service");
var backend_service_1 = require("./backend.service");
require("rxjs/add/operator/toPromise");
var ItemService = (function () {
    function ItemService(logger, backend) {
        this.logger = logger;
        this.backend = backend;
    }
    ItemService.prototype.handleError = function (error) {
        console.error(error);
        return Promise.reject(error.message || error);
    };
    ItemService.prototype.rebind_to_proto = function (item) {
        for (var _i = 0, _a = Object.getOwnPropertyNames(item_1.Item.prototype); _i < _a.length; _i++) {
            var p = _a[_i];
            item[p] = item_1.Item.prototype[p];
        }
    };
    Object.defineProperty(ItemService.prototype, "items", {
        get: function () {
            var _this = this;
            return this.backend.getAll(item_1.Item)
                .then(function (items) {
                _this.logger.log(JSON.stringify(items));
                return items.map(function (i) { return item_1.Item.createFromObject(i); });
            })
                .catch(this.handleError);
        },
        enumerable: true,
        configurable: true
    });
    ItemService.prototype.getItem = function (id) {
        var _this = this;
        return this.backend.get(item_1.Item, id)
            .then(function (item) {
            _this.logger.log(JSON.stringify(item));
            return item_1.Item.createFromObject(item);
        })
            .catch(this.handleError);
    };
    ItemService.prototype.update = function (item) {
        return this.backend.update(item)
            .catch(this.handleError);
    };
    ItemService.prototype.create = function (itemName) {
        var _this = this;
        return this.backend.create(itemName)
            .then(function (item) {
            _this.logger.log("" + JSON.stringify(item));
            return item;
        })
            .catch(this.handleError);
    };
    ItemService.prototype.delete = function (itemId) {
        return this.backend.delete(itemId)
            .catch(this.handleError);
    };
    return ItemService;
}());
ItemService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [logger_service_1.LoggerService,
        backend_service_1.BackendService])
], ItemService);
exports.ItemService = ItemService;
//# sourceMappingURL=item.service.js.map