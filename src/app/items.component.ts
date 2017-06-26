import { Component } from '@angular/core';
import { Item } from './item';
import { ItemService } from './item.service';
import { Router } from '@angular/router';
import { LoggerService } from './logger.service';

@Component({
  selector: 'items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent { 
  private selectedItem: Item;
  private items: Item[];

  constructor(
    private itemService: ItemService, 
    private router: Router,
    private logger: LoggerService) {}

  ngOnInit(): void {
    this.itemService.items
    .then(itemsReceived => this.items = itemsReceived)
    .catch(error => console.error(error));
    this.items = [];
  }

  onNameChange(event: string): void { 
    this.logger.log(`${new Date()}: onNameChange: ${event}`);
    this.selectedItem.name = event; 
  };
  
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
