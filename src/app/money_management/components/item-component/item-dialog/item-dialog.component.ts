import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AccountCode } from '../../../models/account-code.model';
import { Account } from '../../../models/account.model';
import { Category } from '../../../models/category.model';
import { Item } from '../../../models/item.model';
import { AccountCodeService } from '../../../services/account-code.service';
import { AccountService } from '../../../services/account.service';
import { CategoryService } from '../../../services/category.service';
import { ItemService } from '../../../services/item.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-item-dialog',
  templateUrl: './item-dialog.component.html',
  styleUrls: ['./item-dialog.component.sass']
})
export class ItemDialogComponent implements OnInit {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  myControl = new FormControl();

  accounts: Account[] = new Array<Account>();
  accountCodes: AccountCode[] = new Array<AccountCode>();
  categories: Category[] = new Array<Category>();
  categoryNames: string[] = new Array<string>();

  item: Item = {
    id: 0,
    name: '',
    price: 0,
    date: new Date(),
    spare: 0,
    tax: 0,
    total: 0,
    currency: '',
    type: 'Expense',
    account: 0,
    categories: '',
  };

  constructor(
    public dialogRef: MatDialogRef<ItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public passedData: Item,
    public dialog: MatDialog,
    private itemService: ItemService,
    private accountService: AccountService,
    private accountCodeService: AccountCodeService,
    private categoryService: CategoryService,
    ) {}

  ngOnInit(): void {
    this.loadAccounts();
    this.loadAccountCodes();
    this.loadCategories();
  }
  onSubmit(form: NgForm) {
    form.value.total = (form.value.price + form.value.tax + form.value.spare);
    if(form.value.type === 'EXPENSE'){
      form.value.total = -form.value.total;
    }
    this.itemService.addItem(form.value).subscribe(item => {
      this.dialogRef.close();
    });
  }
  loadAccounts(){
    this.accountService.accounts.subscribe(accounts => {
      this.accounts = accounts;
    });
  }
  loadAccountCodes(){
    this.accountCodeService.accountCodes.subscribe(accountCodes => {
      this.accountCodes = accountCodes;
    });
  }
  loadCategories() {
    this.categoryService.categories.subscribe(categories => {
      this.categories = categories;
      this.categoryNames = categories.map(category => category.name);
    });
    
  }
  getAccountName(account: Account): string {
    for (let accountCode of this.accountCodes) {
      if (account.code === accountCode.id) {
        return account.name;
      }
    }
    return '';
  }
}
