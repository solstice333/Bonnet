import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Item } from './item';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        return { items: [
            new Item(0, 'shirt A'),
            new Item(1, 'shirt B'),
            new Item(2, 'pants A'),
            new Item(3, 'pants B'),
            new Item(4, 'shorts A'),
            new Item(5, 'shorts B'),
            new Item(6, 'socks A'),
            new Item(7, 'socks B'),
            new Item(8, 'underwear A'),
            new Item(9, 'underwear B')
        ]};
    }
}