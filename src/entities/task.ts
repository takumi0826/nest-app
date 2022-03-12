import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { ApiProperty } from '@nestjs/swagger';

import { User } from './user';

@Entity()
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @ManyToOne(() => User, (user) => user.id)
  @ApiProperty()
  userId: number;

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
