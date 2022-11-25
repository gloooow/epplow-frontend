import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/money_management/services/account.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.sass']
})
export class AccountsComponent implements OnInit {

  displayedColumns: string[] = ['name', 'balance', 'currency', 'code'];
  dataSource = this.accountService.accounts;

  constructor(
    private accountService: AccountService,
  ) { }

  ngOnInit(): void {
  }

}
