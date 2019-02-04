import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import PersonModel from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  selectedPerson: PersonModel;
  people: PersonModel[];
  readonly URL_API = 'http://192.168.0.7:3000/api/person';

  constructor(private hhtp: HttpClient) {
    this.selectedPerson = new PersonModel();
    /*
    const newCustomer = new PersonModel('142578', 'N', 'Oscar Alberto', 'Martinez Ortega',
      'C.C', 'Colombia', 'Bogota', 'Cra 00-0 #00-00', 3125425896,
      'NN@hotmail.com', 'Activado');
    const newCustomer2 = new PersonModel('142578', 'N', 'Oscar Alberto', 'Martinez Ortega',
      'C.C', 'Colombia', 'Bogota', 'Cra 00-0 #00-00', 3125425896,
      'NN@hotmail.com', 'Activado');
    const newCustomer3 = new PersonModel('142578', 'N', 'Oscar Alberto', 'Martinez Ortega',
      'C.C', 'Colombia', 'Bogota', 'Cra 00-0 #00-00', 3125425896,
      'NN@hotmail.com', 'Activado');
    const newCustomer4 = new PersonModel('142578', 'N', 'Oscar Alberto', 'Martinez Ortega',
      'C.C', 'Colombia', 'Bogota', 'Cra 00-0 #00-00', 3125425896,
      'NN@hotmail.com', 'Activado');
    this.people = [newCustomer, newCustomer2, newCustomer3, newCustomer4];
    */
  }

  getClients(type_person: String) {
    console.log(this.URL_API + '/' + type_person);
    return this.hhtp.get(this.URL_API + '/' + type_person);
  }

  postPerson(person: PersonModel) {
    return this.hhtp.post(this.URL_API, person);
  }

  putPerson(person: PersonModel) {
    return this.hhtp.put(this.URL_API + '/' + person.number_document, person);
  }

  deletePerson(_id: string) {
    return this.hhtp.delete(this.URL_API + '/${_id}');
  }
}
