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
import { EditCustomerComponent } from './customers/edit-customer/edit-customer.component';
import { CustomerDetailComponent } from './customers/customer-detail/customer-detail.component';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'lawyers', component: LawyersComponent},
  {path: 'process', component: ProcessComponent},
  {path: 'customers', component: CustomersComponent},
  {path: 'new-customer/:typeCustomer', component: NewCustomerComponent},
  {path: 'edit-customer/:_id', component: EditCustomerComponent},
  {path: 'new-customer/:_id', component: CustomerDetailComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    HomeComponent,
    LawyersComponent,
    ProcessComponent,
    CustomersComponent,
    NewCustomerComponent,
    EditCustomerComponent,
    CustomerDetailComponent,
    LoginComponent
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
