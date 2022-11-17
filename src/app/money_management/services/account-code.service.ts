import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';
import { AccountCode } from '../models/account-code.model';

@Injectable({
  providedIn: 'root'
})
export class AccountCodeService {
  
  private accountCodes$: BehaviorSubject<AccountCode[]> = new BehaviorSubject<AccountCode[]>([]);

  constructor(private http:HttpClient) {
    this.http.get<AccountCode[]>('http://localhost:8000/accountcodes/').subscribe(accountCodes => {
      this.accountCodes$.next(accountCodes);
    });
   }

   get accountCodes() {
      return this.accountCodes$.asObservable().pipe(filter(accountCode => accountCode !== null));
    }
}
