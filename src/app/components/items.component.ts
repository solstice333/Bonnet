import { Component, Input, OnInit, HostListener } from '@angular/core';
import { Item, Category } from '../item';
import { ItemService } from '../services/item.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { LoggerService } from '../services/logger.service';
import { Filter, FilterOpt } from '../filter';

@Component({
  selector: 'items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit { 
  private items: Item[];
  private star: string = "assets/images/star.png";
  private selectedItem: Item;
  private yoffset: number;

  @Input() filter: Filter;

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router,
    private logger: LoggerService) {}

  private setItemsReceivedViaFilter(filter: Filter) {
    if (filter.opt === FilterOpt.ALL) {
      this.itemService.items
      .then(itemsReceived => this.items = itemsReceived)
      .catch(error => console.error(error));
    }
    else if (filter.opt === FilterOpt.DEALS) {
      this.itemService.items
      .then(itemsReceived => {
        this.items = itemsReceived.filter(
          item => item.hasCategory(new Category('sale')))
      })
      .catch(error => console.error(error))
    }
  }

  private initItems() {
    this.route.params
      .switchMap(params => new Promise((resolve, reject) => {
        return params['term'] ? 
          resolve(params['term']) : reject("FilterAlreadyDefined");
      }))
      .map((term: string) => {
        let foprop = term.toUpperCase();
        this.filter = FilterOpt.hasOwnProperty(foprop) ?
          this.filter = new Filter(FilterOpt[foprop]) :
          this.filter = new Filter(FilterOpt.QUERY, term);
        return this.filter;
      })
      .subscribe(
        filter => this.setItemsReceivedViaFilter(filter),
        error => this.setItemsReceivedViaFilter(this.filter));
  }

  ngOnInit(): void {
    this.initItems();
    this.items = [];
  }

  goToDetail(item: Item): void {
    this.router.navigate(['/detail', item.id]);
  }

  displayDetail(item: Item): void {
    this.selectedItem = item;
  }

  add(name: string): void {
    name = name.trim();
    if (name)
      this.itemService.create(name)
        .then(item => this.items.push(item));
  }

  delete(item: Item): void {
    this.itemService.delete(item.id)
      .then(() => this.items = this.items.filter(i => i !== item))
  }

  @HostListener('window:scroll', ['$event.target']) 
  onScroll(doc: HTMLDocument): void {
    this.yoffset = doc.documentElement.scrollTop;
  }

  isBelowLimit(fromTopPx) {
    return this.yoffset > fromTopPx;
  }
}
