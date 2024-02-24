class Rabbit {
    public gender: Gender;
    public age: number;
    public isAdult: boolean;

    constructor(age: number, gender: Gender) {
        this.age = age;
        this.gender = gender;
        this.isAdult = age > 0;
    }
}