import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';
import { Account } from '../models/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private accounts$: BehaviorSubject<Account[]> = new BehaviorSubject<Account[]>([]);
  
  constructor(private http:HttpClient) { 
    this.http.get<Account[]>('http://localhost:8000/accounts/').subscribe(accounts => {
      this.accounts$.next(accounts);
    });
  }

  get accounts() {
    return this.accounts$.asObservable().pipe(filter(account => account !== null));
  }

  getAccountName(id: number): string {
    let name: string = '';
    this.accounts$.getValue().forEach(account => {
      if (account.id === id) {
        name = account.name;
      }
    });
    return name;
  }
}
