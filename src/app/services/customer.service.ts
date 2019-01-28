import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CustomerModel } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  selectedCustomer: CustomerModel;
  customers: CustomerModel[];
  readonly URL_API = 'http://localhost:3000/api/customers';

  constructor(private hhtp: HttpClient) {
    this.selectedCustomer = new CustomerModel();
  }

  getCustomers() {
    return this.hhtp.get(this.URL_API);
  }

  postCustomers(customer: CustomerModel) {
    return this.hhtp.post(this.URL_API, customer);
  }

  putCustomer(customer: CustomerModel) {
    return this.hhtp.put(this.URL_API + '/${customer._id}', customer);
  }

  deleteCustomer(_id: string) {
    return this.hhtp.delete(this.URL_API + '/${_id}');
  }
}
