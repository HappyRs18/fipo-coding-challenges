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

export function simulatePopulation(years: number, useObjects: boolean = false): number | bigint {
    if (years <= 0)
        return 0;

    if (useObjects) {
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

    let countAdultRabbits: bigint = 2n; // Adam + Eva
    let countChildRabbits: bigint = 0n;

    for (let currentYear = 1; currentYear <= years; currentYear++) {
        let countEvolvedChildRabbits: bigint = countChildRabbits;
        countChildRabbits += countAdultRabbits; // Each adult rabbit pair creates same amount of children.
        countAdultRabbits += countEvolvedChildRabbits; // Evolve first...
        countChildRabbits -= countEvolvedChildRabbits; // Then reduce evolved from children because they aged.
    }

    return convertToNumberIfUnderMaxValue(countChildRabbits);
}

function convertToNumberIfUnderMaxValue(value: bigint): number | bigint {
    return value <= Number.MAX_SAFE_INTEGER ? Number(value) : BigInt(value);
}
