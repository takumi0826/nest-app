import { TopService } from 'src/services/top/top.service';

import { Controller, Get } from '@nestjs/common';

@Controller('top')
export class TopController {
  constructor(private readonly topService: TopService) {}

  @Get()
  init(): string {
    return this.topService.findAll();
  }
}
