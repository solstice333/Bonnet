import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Item } from './item';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        return { items: [
            new Item(0, 'shirt A', null),
            new Item(1, 'shirt B', null),
            new Item(2, 'pants A', null),
            new Item(3, 'pants B', null),
            new Item(4, 'shorts A', null),
            new Item(5, 'shorts B', null),
            new Item(6, 'socks A', null),
            new Item(7, 'socks B', null),
            new Item(8, 'underwear A', null),
            new Item(9, 'underwear B', null)
        ]};
    }
}