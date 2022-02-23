import { TaskResponseDto } from 'src/dtos/task/task-response.dto';
import { UpdateTaskDto } from 'src/dtos/task/update-task.dto';
import { TaskService } from 'src/services/task/task.service';

import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { ApiParam, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { Prisma, Task } from '@prisma/client';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get('/get-all')
  @ApiResponse({
    status: 200,
    description: 'The found record',
    isArray: true,
    type: TaskResponseDto,
  })
  getAllTask(): Promise<Task[]> {
    return this.taskService.getAllTask();
  }

  @Get('/get-one')
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: TaskResponseDto,
  })
  getOneTask(@Query() param: Prisma.TaskWhereUniqueInput): Promise<Task> {
    return this.taskService.getOneTask(param);
  }

  @Post('/create')
  @ApiParam({
    name: 'data',
    type: UpdateTaskDto,
  })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: TaskResponseDto,
  })
  createTask(@Body() data: Prisma.TaskCreateInput): Promise<Task> {
    return this.taskService.createTask(data);
  }

  @Put('/update')
  @ApiParam({
    name: 'data',
    type: UpdateTaskDto,
  })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: TaskResponseDto,
  })
  updateTask(@Body() data: Prisma.TaskUpdateArgs): Promise<Task> {
    return this.taskService.updateTask(data);
  }

  @Delete('/delete')
  @ApiQuery({
    name: 'id',
    type: Number,
  })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: TaskResponseDto,
  })
  deleteTask(@Query() param: Prisma.TaskWhereUniqueInput): Promise<Task> {
    return this.taskService.deleteTask(param);
  }
}
