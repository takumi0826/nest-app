import { IsNotEmpty, isNumber, MaxLength } from 'class-validator';

import { ApiProperty, PartialType } from '@nestjs/swagger';

export class TaskDto {
  @ApiProperty()
  public id: number;

  @IsNotEmpty()
  @ApiProperty()
  public title: string;

  @MaxLength(500)
  @ApiProperty()
  public content?: string;

  @ApiProperty({ required: false })
  public isDone?: boolean;
}
