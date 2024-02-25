import {intersection, intersectionTwo} from "../src/challenges/001/intersection";

test("should verify normal intersection beispiel 1", () => {
    expect(intersection([1, 2, 2, 1], [2, 2])).toContain(2);
})

test("should verify normal intersection beispiel 2", () => {
    const intersectionExample2 = intersection([4, 9, 5], [9, 4, 9, 8, 4]);
    expect(intersectionExample2).toContain(9);
    expect(intersectionExample2).toContain(4);
})

test("should verify intersectionTwo beispiel 1", () => {
    expect(intersectionTwo([1, 2, 2, 1], [2, 2]).filter(x => x === 2).length).toEqual(2);
})

test("should verify intersectionTwo beispiel 2", () => {
    const intersectionTwoExample2 = intersectionTwo([4, 9, 5, 4], [9, 4, 9, 8, 4]);
    expect(intersectionTwoExample2).toContain(9);
    expect(intersectionTwoExample2).toContain(4);
    expect(intersectionTwoExample2.filter(x => x === 4).length).toEqual(2);
})