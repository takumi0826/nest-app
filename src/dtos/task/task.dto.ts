import { IsNotEmpty, isNumber } from 'class-validator';

import { ApiProperty, PartialType } from '@nestjs/swagger';

export class TaskDto {
  @ApiProperty()
  private id: number;

  @IsNotEmpty()
  @ApiProperty()
  private title: string;

  @ApiProperty()
  private content?: string;

  @ApiProperty({ required: false })
  private isDone?: boolean;
}
