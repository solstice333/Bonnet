"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms"); // <-- NgModel lives here
var http_1 = require("@angular/http");
var app_routing_module_1 = require("./app-routing.module");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var app_component_1 = require("../components/app.component");
var item_detail_component_1 = require("../components/item-detail.component");
var items_component_1 = require("../components/items.component");
var home_component_1 = require("../components/home.component");
var item_search_component_1 = require("../components/item-search.component");
var unless_directive_1 = require("../directives/unless.directive");
var capitalize_pipe_1 = require("../pipes/capitalize.pipe");
var item_service_1 = require("../services/item.service");
var logger_service_1 = require("../services/logger.service");
var backend_service_1 = require("../services/backend.service");
var in_memory_data_service_1 = require("../services/in-memory-data.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            // visible to component templates of this module
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            app_routing_module_1.AppRoutingModule,
            http_1.HttpModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService)
        ],
        declarations: [
            app_component_1.AppComponent,
            unless_directive_1.UnlessDirective,
            item_detail_component_1.ItemDetailComponent,
            items_component_1.ItemsComponent,
            home_component_1.HomeComponent,
            capitalize_pipe_1.CapitalizePipe,
            item_search_component_1.ItemSearchComponent
        ],
        bootstrap: [
            // into the index.html host web page
            app_component_1.AppComponent
        ],
        providers: [
            item_service_1.ItemService,
            logger_service_1.LoggerService,
            backend_service_1.BackendService
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map