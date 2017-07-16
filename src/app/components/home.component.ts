import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { Filter, FilterOpt } from '../filter';

@Component({
    selector: 'home',
    templateUrl: './home.component.html' ,
    styleUrls: ['./home.component.css']    
})
export class HomeComponent {
    private items: Item[]
    private filter: Filter = new Filter(FilterOpt.DEALS);

    constructor() {}
}