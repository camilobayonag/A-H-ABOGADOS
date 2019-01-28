import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {CustomerService} from '../../services/customer.service';
import {CustomerModel} from '../../models/customer.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css'],
  providers: [CustomerService]
})
export class NewCustomerComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private customerService: CustomerService) { }

  ngOnInit() {
    const typeCustomer = this._route.snapshot.paramMap.get('typeCustomer');
    this.customerService.selectedCustomer.typeCustomer = typeCustomer;
    console.log('Es ' + this.customerService.selectedCustomer.typeCustomer);
    console.log(this.customerService.selectedCustomer.typeCustomer === 'N');
  }

  addCustomer(form: NgForm) {
    if (form.value._id) {
      this.customerService.putCustomer(form.value)
        .subscribe(res => {
          this.resertFomr(form);
        });
    } else {
      this.customerService.postCustomers(form.value)
        .subscribe(res => {
          this.resertFomr(form);
        });
    }
  }

  resertFomr(form?: NgForm) {
    if (form) {
      form.reset();
      this.customerService.selectedCustomer = new CustomerModel();
    }
  }
}
