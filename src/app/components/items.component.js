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
var item_service_1 = require("../services/item.service");
var router_1 = require("@angular/router");
var logger_service_1 = require("../services/logger.service");
var filter_1 = require("../filter");
var ItemsComponent = (function () {
    function ItemsComponent(itemService, router, logger) {
        this.itemService = itemService;
        this.router = router;
        this.logger = logger;
        this.filter = new filter_1.Filter(filter_1.FilterOpt.ALL);
    }
    ItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.filter.opt === filter_1.FilterOpt.ALL) {
            this.itemService.items
                .then(function (itemsReceived) { return _this.items = itemsReceived; })
                .catch(function (error) { return console.error(error); });
        }
        else if (this.filter.opt === filter_1.FilterOpt.DEALS) {
            this.itemService.items
                .then(function (itemsReceived) { return _this.items = itemsReceived.filter(function (item) {
                return item.hasCategory(new item_1.Category('sale'));
            }); })
                .catch(function (error) { return console.error(error); });
        }
        this.items = [];
    };
    ItemsComponent.prototype.onNameChange = function (event) {
        this.logger.log(new Date() + ": onNameChange: " + event);
        this.selectedItem.name = event;
    };
    ItemsComponent.prototype.onSelect = function (item) {
        this.selectedItem = item;
    };
    ItemsComponent.prototype.goToDetail = function () {
        this.router.navigate(['/detail', this.selectedItem.id]);
    };
    ItemsComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (name)
            this.itemService.create(name)
                .then(function (item) {
                _this.items.push(item);
                _this.selectedItem = null;
            });
    };
    ItemsComponent.prototype.delete = function (item) {
        var _this = this;
        this.itemService.delete(item.id)
            .then(function () {
            _this.items = _this.items.filter(function (i) { return i !== item; });
            if (_this.selectedItem === item)
                _this.selectedItem = null;
        });
    };
    return ItemsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", filter_1.Filter)
], ItemsComponent.prototype, "filter", void 0);
ItemsComponent = __decorate([
    core_1.Component({
        selector: 'items',
        templateUrl: './items.component.html',
        styleUrls: ['./items.component.css']
    }),
    __metadata("design:paramtypes", [item_service_1.ItemService,
        router_1.Router,
        logger_service_1.LoggerService])
], ItemsComponent);
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=items.component.js.map