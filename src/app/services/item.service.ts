import { Injectable } from '@angular/core';
import { Item } from '../components/models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items:Item[] = [
    {
      id: 0,
      title: 'manzana',
      price: 10.5,
      quantity: 4,
      complete: false
    },
    {
      id: 1,
      title: 'pan',
      price: 3.5,
      quantity: 8,
      complete: true
    },
    {
      id: 2,
      title: 'chamarra',
      price: 300,
      quantity: 1,
      complete: false
    }];
  constructor() { }

  getItems(){
    return this.items;
  }

  addItem(item:Item){
    this.items.unshift(item);
  }
}
