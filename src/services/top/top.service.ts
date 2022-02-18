import { Injectable } from '@nestjs/common';

@Injectable()
export class TopService {
  findAll(): string {
    return 'find';
  }
}
