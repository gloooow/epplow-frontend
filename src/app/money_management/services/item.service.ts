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
  private accounts: Account[] = new Array<Account>();

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
    // modify balance of account then update account
    const account = this.accounts.find(a => a.id === item.account);
    if(account != undefined){
      account.balance += item.total;
      this.accountService.updateAccount(account);
    }
    return this.http.post<Item>('http://localhost:8000/items/', item);
  }

  getAll(tuFilter: any){
    var lcFilter = tuFilter.name.toLowerCase()? `&name=${tuFilter.name.toLowerCase()}`: '';
    if(tuFilter.date != null){
      lcFilter += `&date=${tuFilter.date}`;
    }
    if(tuFilter.currency != 0){
      lcFilter += `&currency=${tuFilter.currency}`;
    }
    if(tuFilter.type != 0){
      lcFilter += `&type=${tuFilter.type}`;
    }
    if(tuFilter.account != 0){
      lcFilter += `&account=${tuFilter.account}`;
    }
    if(tuFilter.categories != 0){
      lcFilter += `&categories=${tuFilter.categories}`;
    }
    return this.http.get<Item[]>(`http://localhost:8000/items/?${lcFilter}`);

  }
}