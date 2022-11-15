import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './components/items/items.component';

const routes: Routes = [
  { path: 'money-management', children: [
    { path: '', component: ItemsComponent, },
   ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoneyManagementRoutingModule { }