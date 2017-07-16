import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Item } from '../item'

import { ItemSearchService } from '../services/item-search.service'
import { LoggerService } from '../services/logger.service';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of'; // emits values specified as args

// Observable operators
import 'rxjs/add/operator/catch'; // catch errors on observable to be handled by returning new observable or throw error
import 'rxjs/add/operator/debounceTime'; // emits value from src observable only after particular time span has passed without another src emission
import 'rxjs/add/operator/distinctUntilChanged'; // return observable that emits items emitted by src observable that are distinct by comparison from previous item
import 'rxjs/add/operator/switchMap'; // request-cancel-new-request i.e. emit value only from most recently projected observable which will drop any earlier emissions still processing

@Component({
    selector: 'item-search',
    templateUrl: './item-search.component.html',
    styleUrls: ['./item-search.component.css'],
    providers: [ItemSearchService]
})
export class ItemSearchComponent implements OnInit {
    items: Observable<Item[]>;
    private searchTerms = new Subject<string>();

    constructor(
        private itemSearchService: ItemSearchService,
        private router: Router,
        private logger: LoggerService) {}

    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.items = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap((term: string) => {
                return term ? 
                    this.itemSearchService.search(term) as Observable<Item[]> :
                    Observable.of([] as Item[])
                })
            .catch((error: any) => {
                this.logger.error(error);
                return Observable.of([] as Item[]);
            });
    }

    goToDetail(item: Item): void {
        let link = ['/detail', item.id];
        this.router.navigate(link);
    }

    submit(term: string) {
        console.log(term);
        this.router.navigate(['/products', term]);
    }
}
