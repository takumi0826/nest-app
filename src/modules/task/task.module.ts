import { TaskController } from 'src/controllers/task/task.controller';
import { PrismaService } from 'src/services/lib/prisma.service';
import { TaskService } from 'src/services/task/task.service';

import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [TaskController],
  providers: [TaskService, PrismaService],
})
export class TaskModule {}
