// src/your.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProblemEntity } from './problem.entity';

@Injectable()
export class FormService {
  constructor(
    @InjectRepository(ProblemEntity)
    private readonly problemRepository: Repository<ProblemEntity>,
  ) {}

  async saveData(name: string, problem: string): Promise<ProblemEntity> {
    const newEntry = this.problemRepository.create({ name, problem });
    return this.problemRepository.save(newEntry);
  }

async getAllData(): Promise<ProblemEntity[]> {
    return this.problemRepository.find();
  }
}
