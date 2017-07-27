import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Item, Sizes, Category } from '../item';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let image_path = 'assets/images/dpoy.png';
        return { items: [
            new Item(0, 'shirt A', image_path, [new Category('shirt'), 
                new Category('sale')], 
                5, 15.00, 10.00, new Sizes(true, false, false), 5, 1300),
            new Item(1, 'shirt B', image_path, [new Category('shirt')],
                4, 20.00, 20.00, new Sizes(true, true, true), 30, 400),
            new Item(2, 'pants A', image_path, [new Category('pants')],
                5, 20.50, 20.50, new Sizes(false, true, true), 20, 200),
            new Item(3, 'pants B', image_path, [new Category('pants'), 
                new Category('sale')],
                3.5, 20.00, 15.50, new Sizes(true, true, true), 25, 100),
            new Item(4, 'shorts A', image_path, [new Category('shorts')],
                3/5, 40.00, 40.00, new Sizes(false, true, false), 40, 150),
            new Item(5, 'shorts B', image_path, [new Category('shorts')],
                5/5, 13.00, 13.00, new Sizes(true, true, true), 10, 133),
            new Item(6, 'socks A', image_path, [new Category('socks')],
                4/5, 30.00, 30.00, new Sizes(true, true, false), 20, 220),
            new Item(7, 'socks B', image_path, [new Category('socks')],
                4/5, 9.00, 10.00, new Sizes(true, false, false), 22, 180),
            new Item(8, 'underwear A', image_path, [new Category('underwear'), 
                new Category('sale')], 5/5, 16.00, 12.00, 
                new Sizes(true, true, true), 9, 50),
            new Item(9, 'underwear B', image_path, 
                [new Category('underwear'), new Category('sale')],
                3/5, 8.33, 8.34, new Sizes(true, false, false), 42, 84)
        ]};
    }
}