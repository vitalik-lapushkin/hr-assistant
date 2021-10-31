import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonsModule } from './persons/person.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://localhost:27017/',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        auth: {
          username: 'mongo',
          password: 'mongo',
        },
        dbName: 'hr-assistant'
      },
    ),
    PersonsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
