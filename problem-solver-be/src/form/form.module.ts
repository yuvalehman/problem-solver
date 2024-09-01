import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProblemEntity } from './problem.entity';
import { FormController } from './form.controller';
import { FormService } from './form.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProblemEntity])],
  controllers: [FormController],
  providers: [FormService],
  exports: [FormService],
})
export class FormModule {}
