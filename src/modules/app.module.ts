import { PrismaService } from 'src/services/lib/prisma.service';

import { Module } from '@nestjs/common';

import { AppController } from '../controllers/app.controller';
import { TopController } from '../controllers/top/top.controller';
import { AppService } from '../services/app.service';
import { TopService } from '../services/top/top.service';
import { TaskModule } from './task/task.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, TaskModule],
  controllers: [AppController, TopController],
  providers: [AppService, TopService],
})
export class AppModule {}
