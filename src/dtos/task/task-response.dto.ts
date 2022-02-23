import { ApiProperty } from '@nestjs/swagger';

export class TaskResponseDto {
  @ApiProperty()
  private id: number;

  @ApiProperty()
  private title: string;

  @ApiProperty()
  private content: string | null;

  @ApiProperty()
  private isDone: boolean | null;
}
