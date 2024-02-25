import {Gender} from "../enums/gender";

export class Rabbit {
    public gender: Gender;
    public age: number;

    constructor(age: number, gender: Gender) {
        this.age = age;
        this.gender = gender;
    }
}