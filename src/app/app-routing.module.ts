import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewCustomerComponent} from './customers/new-customer/new-customer.component';

const routes: Routes = [
  {path: 'customers/new-customer', component: NewCustomerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
