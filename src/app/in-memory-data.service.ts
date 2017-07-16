import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Item, Sizes, Category } from './item';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        return { items: [
            new Item(0, 'shirt A', null, [new Category('shirt'), 
                new Category('sale')], 
                5, 10.00, new Sizes(true, false, false), 5),
            new Item(1, 'shirt B', null, [new Category('shirt')],
                4, 20.00, new Sizes(true, true, true), 30),
            new Item(2, 'pants A', null, [new Category('pants')],
                5, 20.50, new Sizes(false, true, true), 20),
            new Item(3, 'pants B', null, [new Category('pants'), 
                new Category('sale')],
                3.5, 15.50, new Sizes(true, true, true), 25),
            new Item(4, 'shorts A', null, [new Category('shorts')],
                3/5, 40.00, new Sizes(false, true, false), 40),
            new Item(5, 'shorts B', null, [new Category('shorts')],
                5/5, 13.00, new Sizes(true, true, true), 10),
            new Item(6, 'socks A', null, [new Category('socks')],
                4/5, 30.00, new Sizes(true, true, false), 20),
            new Item(7, 'socks B', null, [new Category('socks')],
                4/5, 10.00, new Sizes(true, false, false), 22),
            new Item(8, 'underwear A', null, [new Category('underwear'), 
                new Category('sale')], 5/5, 12.00, 
                new Sizes(true, true, true), 9),
            new Item(9, 'underwear B', null, [new Category('underwear')],
                3/5, 8.34, new Sizes(true, false, false), 42)
        ]};
    }
}