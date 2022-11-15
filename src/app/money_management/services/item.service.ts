import { Injectable } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private items$: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([]);

constructor(private http:HttpClient) {
    this.http.get<Item[]>('http://localhost:3000/items').subscribe(items => {
      this.items$.next(items);
    });
  }
  get items() {
    return this.items$.asObservable().pipe(filter(item => item !== null));
  }
  addItem(item: Item) {
    this.items$.next([...this.items$.getValue(), item]);
  }
  deleteItem(item: Item) {
    this.items$.next(this.items$.getValue().filter(i => i !== item));
  }
 }
