import { TaskDto } from 'src/dtos/task/task.dto';
import { Task } from 'src/entities/task';
import { TaskService } from 'src/services/task/task.service';
import { JwtPayload, PasswordOmitUser } from 'src/types/type';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';

import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('task')
@UseGuards(AuthGuard('jwt'))
@ApiTags('Task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get('/get-all/v1')
  @ApiResponse({
    status: 200,
    description: 'The found record',
    isArray: true,
    type: Task,
  })
  getAllTask(@Request() req: { user: JwtPayload }): Promise<Task[]> {
    const { userId } = req.user;
    console.log(req.user);

    return this.taskService.getAllTask(userId);
  }

  @Get('/get-one/v1')
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Task,
  })
  getOneTask(@Query() id: number): Promise<Task> {
    return this.taskService.getOneTask(id);
  }

  @Post('/create/v1')
  @ApiParam({
    name: 'data',
    type: TaskDto,
  })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Task,
  })
  createTask(
    @Body() data: TaskDto,
    @Request() req: { user: JwtPayload },
  ): Promise<InsertResult> {
    data.userId = req.user.userId;
    console.log(data);

    return this.taskService.createTask(data);
  }

  @Put('/update/v1')
  @ApiParam({
    name: 'data',
    type: TaskDto,
  })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Task,
  })
  updateTask(@Body() data: TaskDto): Promise<Task> {
    return this.taskService.updateTask(data);
  }

  @Delete('/delete/v1')
  @ApiQuery({
    name: 'id',
    type: Number,
  })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Task,
  })
  deleteTask(@Query() id: number): Promise<DeleteResult> {
    return this.taskService.deleteTask(id);
  }

  @Put('/done/v1')
  @ApiParam({
    name: 'data',
    type: TaskDto,
  })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Task,
  })
  doneTask(
    @Body() param: { id: number; isDone: boolean },
  ): Promise<UpdateResult> {
    return this.taskService.doneTask(param.id, param.isDone);
  }
}
