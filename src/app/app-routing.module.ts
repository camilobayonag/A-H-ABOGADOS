import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewCustomerComponent} from './customers/new-customer/new-customer.component';
import { EditCustomerComponent} from './customers/edit-customer/edit-customer.component';
import { CustomerDetailComponent} from './customers/customer-detail/customer-detail.component';
import { CustomersComponent } from './customers/customers.component';

const routes: Routes = [
  {path: 'person/:type_person', component: CustomersComponent},
  {path: 'person/client/new-customer/:typeCustomer', component: NewCustomerComponent},
  {path: 'person/client/edit-customer/:_id', component: EditCustomerComponent},
  {path: 'person/client/customer-detail/:_id', component: CustomerDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
