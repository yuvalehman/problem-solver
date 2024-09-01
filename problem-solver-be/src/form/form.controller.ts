// src/submit/submit.controller.ts
import { Body, Controller, Post, Get } from '@nestjs/common';
import { FormService } from './form.service';
import { ProblemEntity } from './problem.entity';

@Controller()
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Post('submit')
  async submitData(
    @Body() body: { name: string; problem: string },
  ): Promise<ProblemEntity> {
    const { name, problem } = body;
    return this.formService.saveData(name, problem);
  }

  @Get('data')
  async getData(): Promise<ProblemEntity[]> {
    return this.formService.getAllData();
  }
}
