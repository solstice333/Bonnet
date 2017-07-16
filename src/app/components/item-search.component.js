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
var item_search_service_1 = require("../services/item-search.service");
var logger_service_1 = require("../services/logger.service");
var Observable_1 = require("rxjs/Observable");
var Subject_1 = require("rxjs/Subject");
// Observable class extensions
require("rxjs/add/observable/of"); // emits values specified as args
// Observable operators
require("rxjs/add/operator/catch"); // catch errors on observable to be handled by returning new observable or throw error
require("rxjs/add/operator/debounceTime"); // emits value from src observable only after particular time span has passed without another src emission
require("rxjs/add/operator/distinctUntilChanged"); // return observable that emits items emitted by src observable that are distinct by comparison from previous item
require("rxjs/add/operator/switchMap"); // request-cancel-new-request i.e. emit value only from most recently projected observable which will drop any earlier emissions still processing
var ItemSearchComponent = (function () {
    function ItemSearchComponent(itemSearchService, router, logger) {
        this.itemSearchService = itemSearchService;
        this.router = router;
        this.logger = logger;
        this.searchTerms = new Subject_1.Subject();
    }
    ItemSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    ItemSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.items = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(function (term) {
            return term ?
                _this.itemSearchService.search(term) :
                Observable_1.Observable.of([]);
        })
            .catch(function (error) {
            _this.logger.error(error);
            return Observable_1.Observable.of([]);
        });
    };
    ItemSearchComponent.prototype.goToDetail = function (item) {
        var link = ['/detail', item.id];
        this.router.navigate(link);
    };
    return ItemSearchComponent;
}());
ItemSearchComponent = __decorate([
    core_1.Component({
        selector: 'item-search',
        templateUrl: './item-search.component.html',
        styleUrls: ['./item-search.component.css'],
        providers: [item_search_service_1.ItemSearchService]
    }),
    __metadata("design:paramtypes", [item_search_service_1.ItemSearchService,
        router_1.Router,
        logger_service_1.LoggerService])
], ItemSearchComponent);
exports.ItemSearchComponent = ItemSearchComponent;
//# sourceMappingURL=item-search.component.js.map