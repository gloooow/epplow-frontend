import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Account } from '../../models/account.model';
import { Category } from '../../models/category.model';
import { Item } from '../../models/item.model';
import { AccountService } from '../../services/account.service';
import { CategoryService } from '../../services/category.service';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.sass']
})
export class ItemsComponent implements OnInit {

  displayedColumns: string[] = ['name', 'date', 'price', 'spare', 'tax', 'total', 'currency', 'type', 'account', 'categories'];
  dataSource = this.itemService.items.pipe(map(items => {
    return items.map(item => {
      return {
        id: item.id,
        name: item.name,
        date: item.date,
        price: item.price,
        spare: item.change,
        tax: item.tax,
        total: item.total,
        currency: item.currency,
        type: item.type,
        account: this.accountService.getAccountName(item.account),
        categories: this.categoryService.getCategoryName(item.categories),
        }});
      }));


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
}
