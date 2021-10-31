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

  cteate(dto: Person): Promise<Person> {
    const createdPerson = new this.personModel(dto);
    return createdPerson.save();
  }

  get(id: String): Promise<Person> {
    return this.personModel.findById(id).exec();
  }
  
  update(id: String, dto: Person): Promise<Person> {
    return this.personModel.findOneAndUpdate({ _id: id }, dto, { new: true }).exec();
  }

  delete(id: String): void {
    this.personModel.findByIdAndDelete(id).exec();
  }
}
