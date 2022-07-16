import {IsString} from 'class-validator'
 

export class CreateTodoDto{

    @IsString()
    todoName: string

    @IsString()
    description: string
}