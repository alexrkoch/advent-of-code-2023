import { expect, test } from "bun:test";
import testInput from "./test-input.txt";
import { main } from "./day-1";

test("should return 142 using sample data set", () => {
	expect(main(testInput)).toBe(142);
});
