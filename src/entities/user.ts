import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({ length: 30 })
  @ApiProperty()
  name: string;

  @PrimaryColumn()
  @Column({ length: 50 })
  @ApiProperty()
  mailAddress: string;

  @Column()
  password: string;
}
