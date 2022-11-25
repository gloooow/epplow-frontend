import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsComponent } from './components/account-component/accounts/accounts.component';
import { ItemsComponent } from './components/item-component/items/items.component';


const routes: Routes = [
  { path: 'money-management', children: [
    { path: 'items', component: ItemsComponent, },
    { path: 'accounts', component: AccountsComponent, },
   ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoneyManagementRoutingModule { }