import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PersonService } from '../../services/person.service';
import { PlaceService } from '../../services/place.service';
import { TypeDocumentService } from '../../services/type-document.service';
import PersonModel from '../../models/person.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { TypeDocumentModel } from '../../models/typeDocument.model';
import { PlaceModel } from '../../models/place.model';

@Component({
  selector: 'app-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css'],
  providers: [PersonService, PlaceService, TypeDocumentService]
})
export class NewCustomerComponent implements OnInit {

  deparments: PlaceModel[];
  cities: PlaceModel[];
  idPlace: string;
  isNatural: boolean;

  constructor(private _route: ActivatedRoute, private customerService: PersonService, private typeDocumentService: TypeDocumentService,
              private placeService: PlaceService, private router: Router) { }

  ngOnInit() {
    const typeCustomer = this._route.snapshot.paramMap.get('typeCustomer');
    this.customerService.selectedPerson.type_rol = typeCustomer;
    this.isNatural = this.customerService.selectedPerson.type_rol === 'N';
    this.getTypesDocument();
    this.getPlaces();
  }

  goToCustomers() {
    this.router.navigate(['person/client']);
  }

  addCustomer(form: NgForm) {
    this.customerService.postPerson(form.value)
        .subscribe(res => {
          this.resertFomr(form);
        });
  }

  resertFomr(form?: NgForm) {
    if (form) {
      form.reset();
      this.customerService.selectedPerson = new PersonModel();
    }
  }

  getTypesDocument() {
    this.typeDocumentService.getTypesDocument()
      .subscribe(res => {
        this.typeDocumentService.typesDocument = res as TypeDocumentModel[];
      });
  }

  getPlaces() {
    this.placeService.getPlaces()
      .subscribe(res => {
        this.placeService.places = res as PlaceModel[];
      });
  }

  setIdPlace(idPlace: string) {
    this.idPlace = idPlace;
  }

  idCountry() {
    return this.idPlace;
  }
}
