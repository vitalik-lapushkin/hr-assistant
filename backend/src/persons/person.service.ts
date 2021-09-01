import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Person, PersonDocument } from './person.schema';

@Injectable()
export class PersonService {
  constructor(@InjectModel(Person.name) private personModel: Model<PersonDocument>) {}

  getList(): Promise<Person[]> {
    return this.personModel.find().exec();
  }
}
