import { expect, test } from "bun:test";
import testInput from "./test-input.txt";
import { part1 } from "./day-1";

test("should return 142 using sample data set", () => {
	expect(part1(testInput)).toBe(142);
});
