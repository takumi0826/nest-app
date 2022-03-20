import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AuthController } from 'src/controllers/auth/auth.controller'
import { Task } from 'src/entities/task'
import { User } from 'src/entities/user'

import { AppController } from '../controllers/app.controller'
import { TopController } from '../controllers/top/top.controller'
import { AppService } from '../services/app.service'
import { TopService } from '../services/top/top.service'
import { AuthModule } from './auth/auth.module'
import { TaskModule } from './task/task.module'
import { UserModule } from './user/user.module'

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
      entities: [Task, User],
      synchronize: true,
      logging: true,
    }),
    UserModule,
    AuthModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
