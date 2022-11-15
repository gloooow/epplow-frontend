import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home/home.component';
import { ItemsComponent } from './money_management/components/items/items.component';
import { ItemsModule } from './money_management/items_module/items.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ItemsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
