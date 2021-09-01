import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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
      },
    ),
    PersonsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
