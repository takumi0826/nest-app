import { Injectable } from '@nestjs/common';
import { Prisma, Task } from '@prisma/client';

import { PrismaService } from '../lib/prisma.service';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async getAllTask(): Promise<Task[]> {
    const result = this.prisma.task.findMany();
    return result;
  }

  async getOneTask(param: Prisma.TaskWhereUniqueInput): Promise<Task> {
    const result = this.prisma.task.findUnique({
      where: { id: Number(param.id) },
    });
    return result;
  }

  async createTask(data: Prisma.TaskCreateInput): Promise<Task> {
    const result = this.prisma.task.create({
      data,
    });
    return result;
  }

  async updateTask(params: Prisma.TaskUpdateArgs): Promise<Task> {
    const { data, where } = params;
    const result = this.prisma.task.update({
      data,
      where,
    });
    return result;
  }

  async deleteTask(param: Prisma.TaskWhereUniqueInput): Promise<Task> {
    const result = this.prisma.task.delete({
      where: { id: Number(param.id) },
    });
    return result;
  }
}
