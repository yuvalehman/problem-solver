import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormModule } from './form/form.module';
import { ProblemEntity } from './form/problem.entity'; // Replace with your actual entity



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'myuser', 
      password: 'mypassword', 
      database: 'problem_solver',
      entities: [ProblemEntity],
      synchronize: true, // This is for development. Remove or set to false in production.
    }),
    FormModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
