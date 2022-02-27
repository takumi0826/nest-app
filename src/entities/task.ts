import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({ length: 50 })
  @ApiProperty({ maxLength: 50 })
  title: string;

  @Column({ length: 500 })
  @ApiProperty({ maxLength: 500 })
  content: string;

  @Column()
  @ApiProperty()
  isDone: boolean;
}
