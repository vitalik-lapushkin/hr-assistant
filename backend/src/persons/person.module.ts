import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonController } from './person.controller';
import { PersonService } from './person.service';
import { Person, PersonSchema } from './person.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Person.name, schema: PersonSchema }])],
  controllers: [PersonController],
  providers: [PersonService],
})
export class PersonsModule {}