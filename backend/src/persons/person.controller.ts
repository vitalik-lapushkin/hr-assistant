import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PersonService } from './person.service';
import { Person } from './person.schema';

@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Get()
  getList(): Promise<Person[]> {
    return this.personService.getList();
  }

  @Post()
  save(@Body() dto: Person): Promise<Person> {
    return this.personService.cteate(dto);
  }

  @Get(':id')
  get(@Param('id') id: String): Promise<Person> {
    return this.personService.get(id);
  }

  @Put(':id')
  update(@Param('id') id: String, @Body() dto: Person): Promise<Person> {
    return this.personService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: String): void {
    this.personService.delete(id);
  }
}
