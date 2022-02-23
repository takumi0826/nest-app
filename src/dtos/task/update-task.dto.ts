import { IsNotEmpty } from 'class-validator';

import { ApiProperty, PartialType } from '@nestjs/swagger';

export class UpdateTaskDto {
  @ApiProperty()
  private title: string;

  @ApiProperty()
  private content: string | null;

  @ApiProperty({ required: false })
  private isDone: boolean | null;
}
