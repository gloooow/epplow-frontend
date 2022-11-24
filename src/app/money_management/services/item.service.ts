import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/item.model';
import { AccountService } from './account.service';
import { Account } from '../models/account.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private items$: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([]);
  accounts: Account[] = new Array<Account>();

constructor(
  private http:HttpClient,
  private accountService: AccountService,
  ) {
    this.http.get<Item[]>('http://localhost:8000/items/').subscribe(items => {
      this.items$.next(items);
    });

    this.accountService.accounts.subscribe(accounts => {
      this.accounts = accounts;
    });
  }
  get items() {
    return this.items$.asObservable().pipe(filter(item => item !== null));
  }
  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>('http://localhost:8000/items/', item);
  }
}