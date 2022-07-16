import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";

@Entity()
export class Todo{

    @PrimaryGeneratedColumn('uuid')
    id: string

    @CreateDateColumn()
    created_on: Timestamp

    @UpdateDateColumn()
    updated_on: Timestamp

    @Column()
    todoName: string
    
    @Column()
    description: string


}