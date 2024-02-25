import {simulatePopulation} from "../src/challenges/002/simulation";

test("if population is 0 on year 0", () => {
    expect(simulatePopulation(0)).toBe(0);
});
test("if population is 2 on year 1", () => {
    expect(simulatePopulation(1)).toBe(2);
});

test("if population is 2 on year 2", () => {
    expect(simulatePopulation(2)).toBe(2);
});

test("if population is 4 on year 3", () => {
    expect(simulatePopulation(3)).toBe(4);
});

test("if population is 6 on year 4", () => {
    expect(simulatePopulation(4)).toBe(6);
});

test("if population is 10 on year 5", () => {
    expect(simulatePopulation(5)).toBe(10);
});

test("if population is 150050 on year 25", () => {
    expect(simulatePopulation(25)).toBe(150050);
});