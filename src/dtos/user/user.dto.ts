import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty()
  public id: number;

  @ApiProperty()
  public name: string;

  @IsEmail()
  @ApiProperty()
  public mailAddress: string;

  @IsNotEmpty()
  @ApiProperty()
  public password: string;
}
