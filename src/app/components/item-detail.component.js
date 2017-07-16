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
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var item_1 = require("../item");
var item_service_1 = require("../services/item.service");
var logger_service_1 = require("../services/logger.service");
require("rxjs/add/operator/switchMap");
var ItemDetailComponent = (function () {
    function ItemDetailComponent(itemService, route, location, logger) {
        this.itemService = itemService;
        this.route = route;
        this.location = location;
        this.logger = logger;
        this.itemNameChange = new core_1.EventEmitter();
    }
    ItemDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) {
            return _this.itemService.getItem(parseInt(params['id']));
        })
            .subscribe(function (item) { return _this.item = item; });
    };
    ItemDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    ItemDetailComponent.prototype.save = function () {
        var _this = this;
        this.itemService.update(this.item)
            .then(function () { return _this.goBack(); });
    };
    ItemDetailComponent.prototype.onNameChange = function (event) {
        this.logger.log(new Date() + ": onNameChange: " + event);
        this.item.name = event;
        this.itemNameChange.emit(event);
    };
    return ItemDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", item_1.Item)
], ItemDetailComponent.prototype, "item", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ItemDetailComponent.prototype, "itemNameChange", void 0);
ItemDetailComponent = __decorate([
    core_1.Component({
        selector: 'item-detail',
        templateUrl: './item-detail.component.html',
        styleUrls: ['./item-detail.component.css']
    }),
    __metadata("design:paramtypes", [item_service_1.ItemService,
        router_1.ActivatedRoute,
        common_1.Location,
        logger_service_1.LoggerService])
], ItemDetailComponent);
exports.ItemDetailComponent = ItemDetailComponent;
//# sourceMappingURL=item-detail.component.js.map