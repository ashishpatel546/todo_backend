import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from 'src/entity/toto.entity';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  controllers: [TodoController],
  providers: [TodoService]
})
export class TodoModule {}
