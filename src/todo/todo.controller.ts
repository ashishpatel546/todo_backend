import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import {CreateTodoDto} from '../dtos/createTodoDto'

@Controller('todo')
export class TodoController {

    constructor(
        private todoService: TodoService
    ){}

    @Get()
    findall(){
        return this.todoService.findAll()
    }

    @Get('/:id')
    findById(@Param('id') id:string){
        return this.todoService.findById(id)
    }

    @Post()
    createTodo(@Body() body: CreateTodoDto){
        return this.todoService.create(body)
    }

    @Delete('/:id')
    deleteTodo(@Param('id') id:string){
        return this.todoService.delete(id)
    }

    @Patch('/:id')
    updateTodo(@Param('id') id:string, @Body() body: any){
        return this.todoService.update(id, body)
    }

}
