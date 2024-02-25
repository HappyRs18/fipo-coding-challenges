import {Rabbit} from "./models/rabbit";
import {Gender} from "./enums/gender";

function createBabyRabbit(gender: Gender) {
    return new Rabbit(0, gender);
}

function rabbitsDoUghUghUgh(adultRabbits: Rabbit[]) {
    const listOfNewBabyRabbits: Rabbit[] = [];

    const maleRabbits = adultRabbits.filter(x => x.gender === Gender.Male && x.age > 0);
    const femaleRabbits = adultRabbits.filter(x => x.gender === Gender.Female && x.age > 0);

    // Creates pairings to not allow female + female or male + male.
    // Also ensures: male without female cannot make baby and vice versa.
    const pairings = maleRabbits.map(
        (maleRabbit, index) => [maleRabbit, femaleRabbits[index]]
    );

    // Now make babies :)
    for (const [maleRabbit, femaleRabbit] of pairings) {
        const parents = [maleRabbit, femaleRabbit]
        listOfNewBabyRabbits.push(createBabyRabbit(Gender.Male));
        listOfNewBabyRabbits.push(createBabyRabbit(Gender.Female));
    }

    return listOfNewBabyRabbits;
}

export function simulatePopulation(years: number): number {
    if (years <= 0)
        return 0;

    const adam: Rabbit = new Rabbit(0, Gender.Male);
    const eva: Rabbit = new Rabbit(0, Gender.Female);

    const listOfAdultRabbits: Rabbit[] = [adam, eva];
    let listOfChildRabbits: Rabbit[] = [];

    for (let currentYear = 1; currentYear <= years; currentYear++) {
        listOfAdultRabbits.map(x => x.age++);
        listOfChildRabbits.map(x => x.age++);

        // Adults reproduce :)
        const newBabies = rabbitsDoUghUghUgh(listOfAdultRabbits);
        listOfChildRabbits.push(...newBabies.filter(x => x.age === 0));

        listOfAdultRabbits.push(...listOfChildRabbits.filter(x => x.age !== 0));
        listOfChildRabbits = listOfChildRabbits.filter(x => x.age === 0);
    }

    // These are newly created babies :)
    const babyRabbits = listOfChildRabbits.filter(x => x.age === 0);

    return babyRabbits.length;
}
