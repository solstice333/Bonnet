import { FilterOpt } from './filter';

export interface Idable {
    id: number;
}

export interface Nameable {
    name: string;
}

export interface ItemIF {
    id: number;
    name: string;
    image: string;
    categories: Category[];
    rating: number;
    oldPrice: number;
    price: number;
    sizes: Sizes;
    inventory: number;
    reviewers: number;
    hasCategory(category: Category): boolean;
    onSale(): boolean;
}

export interface ItemCtor {
    new (id: number, 
        name: string,
        image: string,
        categories: Category[],
        rating: number,
        oldPrice: number,
        price: number,
        sizes: Sizes,
        inventory: number,
        reviewers: number): ItemIF
}

export class Sizes {
  constructor(
    public small: boolean, 
    public medium: boolean, 
    public large: boolean) {}
}

export class Category {
  constructor(public label: string) {
    if (!/^\w+$/i.test(label))
      throw new TypeError("label must be [a-z0-9_] case insensitive")
  }
}

export class Item implements ItemIF {
  constructor(
    public id: number, 
    public name: string,
    public image: string,
    public categories: Category[],
    public rating: number,
    public oldPrice: number,
    public price: number,
    public sizes: Sizes,
    public inventory: number,
    public reviewers: number) {
    if (rating < 0 || rating > 5)
      throw new RangeError("Item rating must be 0-5 inclusive");
  }

  static createFromObject(obj: ItemIF): Item {
    return new Item(obj.id, obj.name, obj.image, obj.categories, 
      obj.rating, obj.oldPrice, obj.price, obj.sizes, obj.inventory, 
      obj.reviewers);
  }

  hasCategory(category: Category): boolean {
    return this.categories.findIndex(
      cat => cat.label.includes(category.label)) >= 0;
  }

  onSale(): boolean {
    return this.hasCategory(new Category('sale')) && 
      this.oldPrice > this.price;
  }
}
