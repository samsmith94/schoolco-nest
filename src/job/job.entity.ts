import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

import { IsEmail, IsNotEmpty } from 'class-validator';

@Entity()
export class Job {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;
}
