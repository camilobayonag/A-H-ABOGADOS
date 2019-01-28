import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { HomeComponent } from './home/home.component';
import { LawyersComponent } from './lawyers/lawyers.component';
import { ProcessComponent } from './process/process.component';
import { CustomersComponent } from './customers/customers.component';
import { NewCustomerComponent} from './customers/new-customer/new-customer.component';


const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'lawyers', component: LawyersComponent},
  {path: 'process', component: ProcessComponent},
  {path: 'customers', component: CustomersComponent},
  {path: 'new-customer', component: NewCustomerComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    HomeComponent,
    LawyersComponent,
    ProcessComponent,
    CustomersComponent,
    NewCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
