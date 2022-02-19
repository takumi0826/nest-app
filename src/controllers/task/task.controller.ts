import { TaskService } from 'src/services/task/task.service';

import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { Prisma, Task } from '@prisma/client';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get('/get-all')
  getAllTask(): Promise<Task[]> {
    return this.taskService.getAllTask();
  }

  @Get('/get-one')
  getOneTask(@Query() param: Prisma.TaskWhereUniqueInput): Promise<Task> {
    return this.taskService.getOneTask(param);
  }

  @Post('/create')
  createTask(@Body() data: Prisma.TaskCreateInput): Promise<Task> {
    return this.taskService.createTask(data);
  }

  @Put('/update')
  updateTask(@Body() data: Prisma.TaskUpdateArgs): Promise<Task> {
    return this.taskService.updateTask(data);
  }

  @Delete('/delete')
  deleteTask(@Query() param: Prisma.TaskWhereUniqueInput): Promise<Task> {
    return this.taskService.deleteTask(param);
  }
}
