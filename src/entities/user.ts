import { ApiProperty } from '@nestjs/swagger'
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm'

import { Task } from './task'

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  @OneToMany(() => Task, (task) => task.userId)
  @ApiProperty()
  id: number

  @Column({ length: 30 })
  @ApiProperty()
  name: string

  @PrimaryColumn()
  @Column({ length: 50 })
  @ApiProperty()
  mailAddress: string

  @Column()
  password: string
}
