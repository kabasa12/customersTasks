import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { CustomersPageComponent } from './components/pages/customers-page/customers-page.component';
import { TasksPageComponent } from './components/pages/tasks-page/tasks-page.component';
import { CustomerService } from './services/customer.service';
import { HomePageComponent } from './components/pages/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CustomersPageComponent,
    TasksPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
