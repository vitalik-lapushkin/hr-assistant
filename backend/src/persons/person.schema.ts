import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PersonDocument = Person & Document;

@Schema()
export class Person {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  middleName: string;

  @Prop()
  dateOfBirth: Date;

  @Prop()
  post: string;
  
  @Prop()
  linkToPhoto: string;
}

export const PersonSchema = SchemaFactory.createForClass(Person);