import {Gender} from "../enums/gender";
import { randomUUID } from 'crypto';

export class Rabbit {
    public gender: Gender;
    public age: number;
    public isAdult: boolean;
    private id: string;
    public parentId: string;

    constructor(age: number, gender: Gender, parentRabbit: Rabbit) {
        this.age = age;
        this.gender = gender;
        this.isAdult = age > 0;
        this.id = randomUUID();
        this.parentId = parentRabbit.id;
    }
}