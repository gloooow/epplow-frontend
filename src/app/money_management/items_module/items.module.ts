import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items.component';
import { MoneyManagementRoutingModule } from '../money_management.routing';

@NgModule({
  imports: [
    CommonModule,
    MoneyManagementRoutingModule,
  ],
  declarations: [ItemsComponent]
})
export class ItemsModule { }
