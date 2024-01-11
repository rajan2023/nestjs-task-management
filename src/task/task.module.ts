import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskRespository } from './repository/tasks.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TaskRespository])],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
