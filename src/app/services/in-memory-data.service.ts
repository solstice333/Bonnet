import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Item, Sizes, Category } from '../item';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        return { items: [
            new Item(0, 'shirt A', '../../images/dpoy.png', [new Category('shirt'), 
                new Category('sale')], 
                5, 10.00, new Sizes(true, false, false), 5),
            new Item(1, 'shirt B', '../../images/dpoy.png', [new Category('shirt')],
                4, 20.00, new Sizes(true, true, true), 30),
            new Item(2, 'pants A', '../../images/dpoy.png', [new Category('pants')],
                5, 20.50, new Sizes(false, true, true), 20),
            new Item(3, 'pants B', '../../images/dpoy.png', [new Category('pants'), 
                new Category('sale')],
                3.5, 15.50, new Sizes(true, true, true), 25),
            new Item(4, 'shorts A', '../images/dpoy.png', [new Category('shorts')],
                3/5, 40.00, new Sizes(false, true, false), 40),
            new Item(5, 'shorts B', '../../images/dpoy.png', [new Category('shorts')],
                5/5, 13.00, new Sizes(true, true, true), 10),
            new Item(6, 'socks A', '../../images/dpoy.png', [new Category('socks')],
                4/5, 30.00, new Sizes(true, true, false), 20),
            new Item(7, 'socks B', '../../images/dpoy.png', [new Category('socks')],
                4/5, 10.00, new Sizes(true, false, false), 22),
            new Item(8, 'underwear A', '../../images/dpoy.png', [new Category('underwear'), 
                new Category('sale')], 5/5, 12.00, 
                new Sizes(true, true, true), 9),
            new Item(9, 'underwear B', '../../images/dpoy.png', [new Category('underwear')],
                3/5, 8.34, new Sizes(true, false, false), 42)
        ]};
    }
}