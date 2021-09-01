import { Controller, Get } from '@nestjs/common';
import { PersonService } from './person.service';
import { Person } from './person.schema';

@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Get()
  getList(): Promise<Person[]> {
    return this.personService.getList();
  }
}
