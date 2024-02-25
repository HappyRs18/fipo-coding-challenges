import {Rabbit} from "./models/rabbit";
import {Gender} from "./enums/gender";

function createBabyRabbit(gender: Gender) {
    return new Rabbit(0, gender);
}

export function rabbitsDoUghUghUgh(adultRabbitPairs: number) {
    if (adultRabbitPairs === 0)
        return [];

    const listOfNewBabyRabbits: Rabbit[] = [];
    //
    // const maleRabbits = adultRabbits.filter(x => x.gender === Gender.Male && x.age > 0);
    // const femaleRabbits = adultRabbits.filter(x => x.gender === Gender.Female && x.age > 0);
    //
    // // Creates pairings to not allow female + female or male + male.
    // // Also ensures: male without female cannot make baby and vice versa.
    // const pairings = maleRabbits.map(
    //     (maleRabbit, index) => [maleRabbit, femaleRabbits[index]]
    // );

    for (let i = 0; i < adultRabbitPairs; i++) {
        listOfNewBabyRabbits.push(createBabyRabbit(Gender.Male), createBabyRabbit(Gender.Female));
    }

    return listOfNewBabyRabbits;
}

export function simulatePopulation(years: number): number {
    if (years <= 0)
        return 0;

    const adam: Rabbit = new Rabbit(0, Gender.Male);
    const eva: Rabbit = new Rabbit(0, Gender.Female);

    let listOfAdultRabbits: Rabbit[] = [adam, eva];
    let listOfChildRabbits: Rabbit[] = [];

    for (let currentYear = 1; currentYear <= years; currentYear++) {
        listOfChildRabbits.map(x => x.age++);

        // Adults reproduce :)
        const newBabies = rabbitsDoUghUghUgh(listOfAdultRabbits.length / 2);
        listOfChildRabbits = listOfChildRabbits.concat(newBabies);

        // Evolve children to adults.
        listOfAdultRabbits = listOfAdultRabbits.concat(listOfChildRabbits.filter(x => x.age !== 0));

        // Overwrite list to give the next iteration the new born child, which can be evolved to adults.
        listOfChildRabbits = listOfChildRabbits.filter(x => x.age === 0);
    }

    return listOfChildRabbits.length;
}
