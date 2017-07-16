import { Component, Input } from '@angular/core';
import { Item, Category } from './item';
import { ItemService } from './item.service';
import { Router } from '@angular/router';
import { LoggerService } from './logger.service';
import { Filter, FilterOpt } from './filter';

@Component({
  selector: 'items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent { 
  private selectedItem: Item;
  private items: Item[];

  @Input() filter: Filter = new Filter(FilterOpt.ALL);

  constructor(
    private itemService: ItemService, 
    private router: Router,
    private logger: LoggerService) {}

  ngOnInit(): void {
    if (this.filter.opt === FilterOpt.ALL) {
      this.itemService.items
      .then(itemsReceived => this.items = itemsReceived)
      .catch(error => console.error(error));
    }
    else if (this.filter.opt === FilterOpt.DEALS) {
      this.itemService.items
      .then(itemsReceived => this.items = itemsReceived.filter(item => {
          return item.hasCategory(new Category('sale'));
        }))
      .catch(error => console.error(error))
    }
    this.items = [];
  }

  onNameChange(event: string): void { 
    this.logger.log(`${new Date()}: onNameChange: ${event}`);
    this.selectedItem.name = event; 
  }
  
  onSelect(item: Item): void { 
    this.selectedItem = item;
  }

  goToDetail(): void {
    this.router.navigate(['/detail', this.selectedItem.id]);
  }

  add(name: string): void {
    name = name.trim();
    if (name)
      this.itemService.create(name)
        .then(item => {
          this.items.push(item);
          this.selectedItem = null;
        });
  }

  delete(item: Item): void {
    this.itemService.delete(item.id)
      .then(() => {
        this.items = this.items.filter(i => i !== item);
        if (this.selectedItem === item) 
          this.selectedItem = null;
      })
  }
}
