import { TaskDto } from 'src/dtos/task/task.dto';
import { Task } from 'src/entities/task';
import { DeleteResult, getConnection, InsertResult, Repository, UpdateResult } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async getAllTask(): Promise<Task[]> {
    const result = this.taskRepository.find();
    return result;
  }

  async getOneTask(id: number): Promise<Task> {
    const result = this.taskRepository.findOne(id);
    return result;
  }

  async createTask(data: Partial<TaskDto>): Promise<InsertResult> {
    const result = this.taskRepository.insert(data);
    return result;
  }

  async updateTask(data: Partial<TaskDto>): Promise<Task> {
    const result = this.taskRepository.save(data);
    return result;
  }

  async deleteTask(id: number): Promise<DeleteResult> {
    const result = this.taskRepository.delete(id);
    return result;
  }

  async doneTask(id: number, isDone: boolean): Promise<UpdateResult> {
    const result = await getConnection()
      .createQueryBuilder()
      .update(Task)
      .set({ isDone })
      .where('id = :id', { id })
      .execute();
    return result;
  }
}
