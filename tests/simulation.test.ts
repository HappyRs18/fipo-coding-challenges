import {fibonacciModifiedForRabbits, rabbitsDoUghUghUgh, simulatePopulation} from "../src/challenges/002/simulation";
import {Rabbit} from "../src/challenges/002/models/rabbit";
import {Gender} from "../src/challenges/002/enums/gender";
import {intersectionTwo} from "../src/challenges/001/intersection";

const useObjectVariant = false;

test("should generate two baby rabbits if rabbits are adults", () => {
    const adamAndEva = [
        new Rabbit(1, Gender.Male),
        new Rabbit(1, Gender.Female)
    ];
    expect(rabbitsDoUghUghUgh(adamAndEva.length / 2).length).toBe(2);
})

test("should generate nothing if rabbits are not adults", () => {
    expect(rabbitsDoUghUghUgh(0).length).toBe(0);
})

test("if population is 0 on year 0", () => {
    expect(simulatePopulation(0, useObjectVariant)).toBe(0);
});
test("if population is 2 on year 1", () => {
    expect(simulatePopulation(1, useObjectVariant)).toBe(2);
});

test("if population is 2 on year 2", () => {
    expect(simulatePopulation(2, useObjectVariant)).toBe(2);
});

test("if population is 4 on year 3", () => {
    expect(simulatePopulation(3, useObjectVariant)).toBe(4);
});

test("if population is 6 on year 4", () => {
    expect(simulatePopulation(4, useObjectVariant)).toBe(6);
});

test("if population is 10 on year 5", () => {
    expect(simulatePopulation(5, useObjectVariant)).toBe(10);
});

test("if population is 150050 on year 25", () => {
    expect(simulatePopulation(25, useObjectVariant)).toBe(150050);
});

test("if population is 25172538050 on year 50", () => {
    if (!useObjectVariant)
        expect(simulatePopulation(50, useObjectVariant)).toBe(25172538050);

    expect(true).toBe(true);
});

test("if population is 708449696358523830150 on year 100", () => {
    if (!useObjectVariant)
        expect(simulatePopulation(100, useObjectVariant)).toBe(708449696358523830150n);

    expect(true).toBe(true);
});

test("if population is 278846449123395760279448765740814567900140513175394614528217925896651143245726581383115317752445042588250 on year 500", () => {
    if (!useObjectVariant)
        expect(simulatePopulation(500, useObjectVariant)).toBe(278846449123395760279448765740814567900140513175394614528217925896651143245726581383115317752445042588250n);

    expect(true).toBe(true);
});

test("should print population from 0 to 12", () => {
    let s = [];
    for (let i = 0; i < 12; i++) {
        s.push(simulatePopulation(i, useObjectVariant));
    }

    expect(true).toBe(true);
});

test("should print modified fibonacci numbers which simulates the population", () => {
    const populationRabbits: number[] = [];
    const fibonacciRabbitsNumbers: number[] = [];

    for (let i = 1; i <= 10; i++) {
        populationRabbits.push(Number(simulatePopulation(i, useObjectVariant)));
        fibonacciRabbitsNumbers.push(Number(fibonacciModifiedForRabbits(i )));
    }

    expect(populationRabbits.length).toEqual(fibonacciRabbitsNumbers.length);
    expect(intersectionTwo(populationRabbits, fibonacciRabbitsNumbers)).toStrictEqual(populationRabbits)
})

test("should be equal to simulate population", () => {
    expect(fibonacciModifiedForRabbits(25)).toEqual(simulatePopulation(25, useObjectVariant));
})
