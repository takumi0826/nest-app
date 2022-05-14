import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { TaskDto } from 'src/dtos/task/task.dto'
import { Task } from 'src/entities/task'
import {
  DeleteResult,
  getConnection,
  InsertResult,
  Repository,
  UpdateResult,
} from 'typeorm'

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>
  ) {}

  async getAllTask(userId: number): Promise<Task[]> {
    const result = this.taskRepository.find({ userId })
    return result
  }

  async getOneTask(id: number): Promise<Task> {
    const result = this.taskRepository.findOne(id)
    return result
  }

  async createTask(data: Pick<TaskDto, 'title' | 'isDone'>): Promise<Task> {
    const { raw } = await this.taskRepository.insert(data)
    const result = this.getOneTask(raw.insertId)
    return result
  }

  async updateTask(data: Partial<TaskDto>): Promise<Task> {
    const result = this.taskRepository.save(data)
    return result
  }

  async deleteTask(id: number): Promise<DeleteResult> {
    const result = this.taskRepository.delete(id)
    return result
  }

  async doneTask(id: number, isDone: boolean): Promise<UpdateResult> {
    const result = await getConnection()
      .createQueryBuilder()
      .update(Task)
      .set({ isDone })
      .where('id = :id', { id })
      .execute()
    return result
  }
}
