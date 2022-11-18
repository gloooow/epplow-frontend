import { Component, OnInit } from '@angular/core';
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
}
