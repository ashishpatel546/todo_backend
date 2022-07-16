import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTodoDto } from 'src/dtos/createTodoDto';
import { Todo } from 'src/entity/toto.entity';
import { Repository } from 'typeorm';



@Injectable()
export class TodoService {

    constructor(
        @InjectRepository(Todo) private todoRepo: Repository<Todo>
    ){}

    async create(data: CreateTodoDto){
        const todo = this.todoRepo.create(data)
        return this.todoRepo.save(todo)
    }

    async findAll(){
        return this.todoRepo.find();
    }

    async findById(id: string){
        return this.todoRepo.findOne({where: {id: id}})
    }

    async update(id: string, todoData: Partial<Todo>){
        const todoToUpdate = await this.findById(id)
        Object.assign(todoToUpdate, todoData)
        return this.todoRepo.save(todoToUpdate)
    }

    async delete(id:string){
        const todoToDelete = await this.findById(id)
        return this.todoRepo.remove(todoToDelete)
    }

}
