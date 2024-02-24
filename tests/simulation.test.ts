import {simulatePopulation} from "../src/challenges/002/simulation";

test("Inits test with jest", () => {
    expect(simulatePopulation(0)).toBe(0);
    expect(simulatePopulation(1)).toBe(2);
    expect(simulatePopulation(2)).toBe(2);
    expect(simulatePopulation(3)).toBe(4);
})