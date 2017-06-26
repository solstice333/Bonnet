import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import { ItemService } from './item.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html' ,
    styleUrls: ['./home.component.css']    
})
export class HomeComponent implements OnInit {
    private items: Item[]

    constructor(private itemService: ItemService) {}
    
    ngOnInit(): void {
        this.itemService.items
        .then(items => this.items = items.slice(0, 5))
        .catch(error => console.error(error));
    }
}