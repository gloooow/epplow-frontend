import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Item } from '../../models/item.model';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-item-dialog',
  templateUrl: './item-dialog.component.html',
  styleUrls: ['./item-dialog.component.sass']
})
export class ItemDialogComponent implements OnInit {

  item: Item = {
    id: 0,
    name: '',
    price: 0,
    date: new Date(),
    change: 0,
    tax: 0,
    type: 'Expense',
    account: '',
    categories: []
  };
  constructor(
    public dialogRef: MatDialogRef<ItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public passedData: Item,
    public dialog: MatDialog,
    private itemService: ItemService,
    ) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    // this.itemService.addItem(form.value);
  }
}
