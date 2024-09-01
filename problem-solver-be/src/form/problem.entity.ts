// src/your.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('problems')
export class ProblemEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  problem: string;
}
