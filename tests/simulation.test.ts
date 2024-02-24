import {testFunc} from "../src/challenges/002/simulation";

test("Inits test with jest", () => {
    expect(testFunc(2)).toBe(42);
})