import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({ length: 30 })
  @ApiProperty()
  name: string;

  @Column({ length: 50 })
  @ApiProperty()
  mailAddress: string;

  @Column()
  passWord: string;
}
