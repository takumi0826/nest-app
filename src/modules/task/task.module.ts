import { TaskController } from 'src/controllers/task/task.controller';
import { Task } from 'src/entities/task';
import { TaskService } from 'src/services/task/task.service';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
