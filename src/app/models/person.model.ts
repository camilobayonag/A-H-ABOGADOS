import { TypeDocumentModel } from './typeDocument.model';
import { StatusModel } from './status.model';
import { PlaceModel } from './place.model';

export default class PersonModel {
  first_name: string;
  last_name: string;
  type_document: TypeDocumentModel;
  number_document: string;
  email: string;
  phone: string;
  address: string;
  type_person: string;
  type_rol: string;
  status: StatusModel;
  idPlace: PlaceModel;
  password: string;
  birthday: Date;
  urlImg: string;
  gender: string;
}
