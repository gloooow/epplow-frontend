import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { lastValueFrom, map } from 'rxjs';
import { Account } from 'src/app/money_management/models/account.model';
import { Category } from 'src/app/money_management/models/category.model';
import { Item } from 'src/app/money_management/models/item.model';
import { AccountService } from 'src/app/money_management/services/account.service';
import { CategoryService } from 'src/app/money_management/services/category.service';
import { ItemService } from 'src/app/money_management/services/item.service';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  isIndeterminateValue: boolean = false;

  displayedColumns: string[] = ['select', 'name', 'date', 'price', 'spare', 'tax', 'total', 'currency', 'type', 'account', 'categories'];
  // dataSource = this.itemService.items;
  dataSource: Item[] = [];

  accounts: Account[] = new Array<Account>;
  categories: Category[] = new Array<Category>();
  items: Item[] = new Array<Item>();
  types: String[] = ['EXPENSE', 'INCOME', 'TRANSFER'];

  filter = {
    name: '',
    date: new Date().toISOString().slice(0, 10),
    currency: 0,
    type: 0,
    account: 0,
    categories: 0,
  }
  
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
    this.itemService.getAll(this.filter).subscribe(items => {
      this.dataSource = items;
      this.dataSource = this.dataSource.map(item => {
        return item;
      });
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

  searchItem(lClearSearch = false){
    console.log(this.filter);
    if(lClearSearch){
      this.filter = {
        name: '',
        date: new Date().toISOString().slice(0, 10),
        currency: 0,
        type: 0,
        account: 0,
        categories: 0,
      }
    }
    this.loadItems();
  }
  filteredItemNr: number = 0;
  intermediateItemNr: number = 0;
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    this.itemService.items.subscribe(items => {
      this.filteredItemNr = items.filter(item => {
        return item.selected;
      }).length;
      return this.filteredItemNr
    });
    const numRows = this.dataSource.length;
    return this.filteredItemNr === numRows && this.filteredItemNr > 0;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.dataSource.forEach(row => {
        row.selected = !row.selected;
        this.itemService.updateItem(row).subscribe();
      });
      return;
    }

    this.dataSource.forEach(row => {
      row.selected = true;
      this.itemService.updateItem(row).subscribe();
    });
  }
  // check if indeterminate state should be shown
  isIndeterminate() {
    this.itemService.items.subscribe(items => {
      this.intermediateItemNr = items.filter(item => {
        return item.selected;
      }).length;
      return this.intermediateItemNr
    });
    const numRows = this.dataSource.length;
    return this.intermediateItemNr > 0 && this.intermediateItemNr < numRows;
  }

  async toggleRow(row: Item) {
    row.selected = !row.selected;
    await lastValueFrom(this.itemService.updateItem(row)).then(() => {
      this.loadItems();
      this.isIndeterminate();
      this.isAllSelected()
    });
  }
}
