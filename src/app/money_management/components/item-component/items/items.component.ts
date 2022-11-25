import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/money_management/models/account.model';
import { Category } from 'src/app/money_management/models/category.model';
import { Item } from 'src/app/money_management/models/item.model';
import { AccountService } from 'src/app/money_management/services/account.service';
import { CategoryService } from 'src/app/money_management/services/category.service';
import { ItemService } from 'src/app/money_management/services/item.service';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.sass']
})
export class ItemsComponent implements OnInit {

  displayedColumns: string[] = ['name', 'date', 'price', 'spare', 'tax', 'total', 'currency', 'type', 'account', 'categories'];
  dataSource = this.itemService.items;

  accounts: Account[] = new Array<Account>;
  categories: Category[] = new Array<Category>();
  items: Item[] = new Array<Item>();
  
  constructor(
    private itemService: ItemService,
    private accountService: AccountService,
    private categoryService: CategoryService,
  ) { }

  ngOnInit(): void {
    this.loadAccounts();
    this.loadCategories();
    this.loadItems();
  }
  //TODO: Somehow get the account name from the account id 
  loadAccounts(){
    this.accountService.accounts.subscribe(accounts => {
      this.accounts = accounts;
    });
  }

  loadCategories() {
    this.categoryService.categories.subscribe(categories => {
      this.categories = categories;
    });  
  }

  loadItems() {
    this.itemService.items.subscribe(items => {
      this.items = items;
    });
  }
  getAccountName(id: number) {
    return this.accounts.find(account => account.id === id)?.name;
  }
  getCategoryNames(categories: number) {
    return this.categories.find(category => category.id === categories)?.name;
  }
  getCurrencyName(id: number) {
    return this.accounts.find(account => account.id === id)?.currency;
  }
}
