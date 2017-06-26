import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Item } from './item';

import { BackendService } from './backend.service';

@Injectable()
export class ItemSearchService {
    constructor(private backend: BackendService) {}

    search(term: string): Observable<Item[]> {
        return this.backend.search(term) as Observable<Item[]>;
    }
}
