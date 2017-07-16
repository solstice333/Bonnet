"use strict";
var item_1 = require("../item");
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        return { items: [
                new item_1.Item(0, 'shirt A', '../../images/dpoy.png', [new item_1.Category('shirt'),
                    new item_1.Category('sale')], 5, 10.00, new item_1.Sizes(true, false, false), 5),
                new item_1.Item(1, 'shirt B', '../../images/dpoy.png', [new item_1.Category('shirt')], 4, 20.00, new item_1.Sizes(true, true, true), 30),
                new item_1.Item(2, 'pants A', '../../images/dpoy.png', [new item_1.Category('pants')], 5, 20.50, new item_1.Sizes(false, true, true), 20),
                new item_1.Item(3, 'pants B', '../../images/dpoy.png', [new item_1.Category('pants'),
                    new item_1.Category('sale')], 3.5, 15.50, new item_1.Sizes(true, true, true), 25),
                new item_1.Item(4, 'shorts A', '../images/dpoy.png', [new item_1.Category('shorts')], 3 / 5, 40.00, new item_1.Sizes(false, true, false), 40),
                new item_1.Item(5, 'shorts B', '../../images/dpoy.png', [new item_1.Category('shorts')], 5 / 5, 13.00, new item_1.Sizes(true, true, true), 10),
                new item_1.Item(6, 'socks A', '../../images/dpoy.png', [new item_1.Category('socks')], 4 / 5, 30.00, new item_1.Sizes(true, true, false), 20),
                new item_1.Item(7, 'socks B', '../../images/dpoy.png', [new item_1.Category('socks')], 4 / 5, 10.00, new item_1.Sizes(true, false, false), 22),
                new item_1.Item(8, 'underwear A', '../../images/dpoy.png', [new item_1.Category('underwear'),
                    new item_1.Category('sale')], 5 / 5, 12.00, new item_1.Sizes(true, true, true), 9),
                new item_1.Item(9, 'underwear B', '../../images/dpoy.png', [new item_1.Category('underwear')], 3 / 5, 8.34, new item_1.Sizes(true, false, false), 42)
            ] };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map