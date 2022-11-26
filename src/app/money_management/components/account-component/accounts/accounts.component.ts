import { Component, OnInit } from '@angular/core';
import { Account, ConvertionRate } from 'src/app/money_management/models/account.model';
import { AccountService } from 'src/app/money_management/services/account.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  displayedColumns: string[] = ['name', 'balance', 'currency', 'equivalent', 'code'];
  dataSource: Account[] = [];
  rateEUR: number = 0;
  ratePLN: number = 0;
  total: number = 0;

  constructor(
    private accountService: AccountService,
  ) { }

  ngOnInit(): void {
    this.accountService.accounts.subscribe(accounts => {
      accounts.forEach(account => {
        if (account.currency == 'EUR') {
          this.accountService.getConversionRate('EUR').subscribe((data: any) => {
            account.rate = Number((Number(data.rates.RON) * account.balance).toFixed(2));
            this.total += account.rate;
          });
        }
        else if(account.currency == 'PLN'){
          this.accountService.getConversionRate('PLN').subscribe((data: any) => {
            account.rate = Number((Number(data.rates.RON) * account.balance).toFixed(2));
            this.total += account.rate;
          });
        }
        else if (account.currency == 'RON') {
          account.rate = account.balance;
          this.total += account.rate;
        }
        if(account.balance == 0){
          account.rate = 0;
        }
      });
      this.dataSource = accounts;
    });
  }
}
