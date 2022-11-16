import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Items_moduleComponent } from './items_module.component';
import { MoneyManagementRoutingModule } from '../money_management.routing';

@NgModule({
  imports: [
    CommonModule,
    MoneyManagementRoutingModule,
  ],
  declarations: [Items_moduleComponent]
})
export class Items_moduleModule { }
