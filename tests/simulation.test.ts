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

test("if comply testcases from suck", () => {
    expect(simulatePopulation(0, useObjectVariant)).toBe(0);
    expect(simulatePopulation(1, useObjectVariant)).toBe(2);
    expect(simulatePopulation(2, useObjectVariant)).toBe(2);
    expect(simulatePopulation(3, useObjectVariant)).toBe(4);
    expect(simulatePopulation(4, useObjectVariant)).toBe(6);
    expect(simulatePopulation(5, useObjectVariant)).toBe(10);
    expect(simulatePopulation(25, useObjectVariant)).toBe(150050);

    if (!useObjectVariant) {
        expect(simulatePopulation(50, useObjectVariant)).toBe(25172538050);
        expect(simulatePopulation(100, useObjectVariant)).toBe(708449696358523830150n);
        expect(simulatePopulation(500, useObjectVariant)).toBe(278846449123395760279448765740814567900140513175394614528217925896651143245726581383115317752445042588250n);
    }
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
        fibonacciRabbitsNumbers.push(Number(fibonacciModifiedForRabbits(i)));
    }

    expect(populationRabbits.length).toEqual(fibonacciRabbitsNumbers.length);
    expect(intersectionTwo(populationRabbits, fibonacciRabbitsNumbers)).toStrictEqual(populationRabbits)
})

test("should be equal to simulate population", () => {
    for (let i = 1; i < 26; i++) {
        expect(fibonacciModifiedForRabbits(i)).toEqual(simulatePopulation(i, useObjectVariant));
    }
})
