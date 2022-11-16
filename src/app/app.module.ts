import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home/home.component';
import { ItemsComponent } from './money_management/components/items/items.component';
import { Items_moduleModule } from './money_management/items_module/items_module.module';
import { NavbarComponent } from './money_management/components/navbar/navbar.component';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ItemDialogComponent } from './money_management/components/item-dialog/item-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemsComponent,
    NavbarComponent,
    ItemDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Items_moduleModule,

    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
