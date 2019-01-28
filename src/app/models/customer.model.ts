export class CustomerModel {
  constructor(_id = '', typeCustomer = '', name = '', lastName = '', typeDocument = '', country = '', city = '', address = '',
              telephoneNumber = 0, email = '') {
    this._id = _id;
    this.typeCustomer = typeCustomer;
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.typeDocument = typeDocument;
    this.country = country;
    this.city = city;
    this.address = address;
    this.telephoneNumber = telephoneNumber;
  }

  _id: string;
  typeCustomer: string;
  name: string;
  lastName: string;
  email: string;
  typeDocument: string;
  country: string;
  city: string;
  address: string;
  telephoneNumber: number;

}
