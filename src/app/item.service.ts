import { Injectable } from '@angular/core';
import { Item } from './item';

import { LoggerService } from './logger.service';
import { BackendService } from './backend.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ItemService {
    private handleError(error: any): Promise<any> {
        console.error(error);
        return Promise.reject(error.message || error);
    }

    constructor(
        private logger: LoggerService,
        private backend: BackendService) {}

    get items(): Promise<Item[]> { 
        return this.backend.getAll(Item)
            .then(items => {
                this.logger.log(JSON.stringify(items));
                return items as Item[];
            })
            .catch(this.handleError);
    }

    getItem(id: number): Promise<Item> {
        return this.backend.get(Item, id)
            .then(item => {
                this.logger.log(JSON.stringify(item));
                return item as Item;
            })
            .catch(this.handleError);
    }

    update(item: Item): Promise<Item> {
        return this.backend.update(item)
            .catch(this.handleError) as Promise<Item>;
    }

    create(itemName: string): Promise<Item> {
        return this.backend.create(itemName)
            .then(item => {
                this.logger.log(`${JSON.stringify(item)}`);
                return item as Item;                
            })
            .catch(this.handleError);
    }

    delete(itemId: number): Promise<Item> {
        return this.backend.delete(itemId)
            .catch(this.handleError);
    }
}
