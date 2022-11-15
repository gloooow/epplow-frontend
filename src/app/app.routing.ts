import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home/home.component";

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'home', component: HomeComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { 
    enableTracing: false, 
    scrollPositionRestoration: 'enabled', 
    relativeLinkResolution: 'legacy',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }