import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';
import { Account, ConvertionRate } from '../models/account.model';

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
  
  updateAccount(account: Account) {
    try{
      this.http.put<Account>(`http://localhost:8000/accounts/${account.id}/`, account).subscribe(account => {
        const accounts = this.accounts$.getValue();
        const index = accounts.findIndex(a => a.id === account.id);
        accounts[index] = account;
        this.accounts$.next(accounts);
      });
    }
    catch(e) {
      console.log(e);
    }
  }

  getConversionRate(symbol: string) {
    return this.http.get(`https://api.exchangerate.host/latest?base=${symbol}&symbols=RON`);
  }
}
