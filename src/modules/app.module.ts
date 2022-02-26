import { Task } from 'src/entities/task';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from '../controllers/app.controller';
import { TopController } from '../controllers/top/top.controller';
import { AppService } from '../services/app.service';
import { TopService } from '../services/top/top.service';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    TaskModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'todos',
      entities: [Task],
      synchronize: true,
      logging: true,
    }),
  ],
  controllers: [AppController, TopController],
  providers: [AppService, TopService],
})
export class AppModule {}
