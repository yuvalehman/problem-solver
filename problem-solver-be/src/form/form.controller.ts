import { Controller, Get } from '@nestjs/common';

@Controller('form')
export class FormController {
  @Get()
  getHello(): string {
    return 'Hello from NestJS!';
  }
}
