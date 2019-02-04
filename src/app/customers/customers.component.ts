import { Component, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';
import { StatusService } from '../services/status.service';
import { NgForm } from '@angular/forms';
import PersonModel from '../models/person.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  providers: [PersonService]
})
export class CustomersComponent implements OnInit {

  constructor(private customerService: PersonService, private _route: ActivatedRoute) {}

  ngOnInit() {
    this.getCustomers();
  }

  addCustomer(form: NgForm) {
    if (form.value._id) {
      this.customerService.putPerson(form.value)
        .subscribe(res => {
          this.resertFomr(form);
          this.getCustomers();
        });
    } else {
      this.customerService.postPerson(form.value)
        .subscribe(res => {
          this.resertFomr(form);
          this.getCustomers();
        });
    }
  }

  getCustomers() {
    this.customerService.getClients(this._route.snapshot.paramMap.get('type_person'))
      .subscribe(res => {
        this.customerService.people = res as PersonModel[];
        console.log(this.customerService.people);
      });
  }

  isNatural(customer: PersonModel) {
    return customer.type_rol === 'N';
  }

  editCustomer(customer: PersonModel) {
    this.customerService.selectedPerson = customer;
    // this.employeeService.putEmployee(employee._id);
  }

  viewCustomer(customer: PersonModel) {
    this.customerService.selectedPerson = customer;
  }

  deleteCustomer(_id: string) {
    this.customerService.deletePerson(_id)
      .subscribe(res => {
        this.getCustomers();
      });
  }

  resertFomr(form?: NgForm) {
    if (form) {
      form.reset();
      this.customerService.selectedPerson = new PersonModel();
    }
  }

}
