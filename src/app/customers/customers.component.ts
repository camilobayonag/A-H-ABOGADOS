import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../services/customer.service';
import {NgForm} from '@angular/forms';
import {CustomerModel} from '../models/customer.model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  providers: [CustomerService]
})
export class CustomersComponent implements OnInit {

  constructor(private customerService: CustomerService) { }


  ngOnInit() {
    this.getCustomers();
  }

  addCustomer(form: NgForm) {
    if (form.value._id) {
      this.customerService.putCustomer(form.value)
        .subscribe(res => {
          this.resertFomr(form);
          this.getCustomers();
        });
    } else {
      this.customerService.postCustomers(form.value)
        .subscribe(res => {
          this.resertFomr(form);
          this.getCustomers();
        });
    }
  }

  getCustomers() {
    this.customerService.getCustomers()
      .subscribe(res => {
        this.customerService.customers = res as CustomerModel[];

      });
  }

  editCustomers(employee: CustomerModel) {
    this.customerService.selectedCustomer = employee;
    // this.employeeService.putEmployee(employee._id);
  }

  deleteCustomer(_id: string) {
    this.customerService.deleteCustomer(_id)
      .subscribe(res => {
        this.getCustomers();
      });
  }

  resertFomr(form?: NgForm) {
    if (form) {
      form.reset();
      this.customerService.selectedCustomer = new CustomerModel();
    }
  }

}
