import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Item } from '../item';
import { ItemService } from '../services/item.service';
import { LoggerService } from '../services/logger.service';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'item-detail',
    templateUrl: './item-detail.component.html',
    styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
    @Input() item: Item;
    @Output() itemNameChange = new EventEmitter();

    constructor(
        private itemService: ItemService,        
        private route: ActivatedRoute,
        private location: Location,
        private logger: LoggerService) {}

    ngOnInit(): void {
        this.route.params
            .switchMap(params => 
                this.itemService.getItem(parseInt(params['id'])))
            .subscribe(item => this.item = item)
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.itemService.update(this.item)
            .then(() => this.goBack());
    }

    onNameChange(event: string): void {
        this.logger.log(`${new Date()}: onNameChange: ${event}`);
        this.item.name = event;
        this.itemNameChange.emit(event);
    }
}