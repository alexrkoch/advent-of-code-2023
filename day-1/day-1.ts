import day1Input from "./input.txt";

export function part1(input: string): number {
	let total = 0;
	const lines = input.split("\n");
	for (const line of lines) {
		let twoDigits = "";
		for (let i = 0; i < line.length; i++) {
			if (!isNaN(parseInt(line[i]))) {
				twoDigits = line[i];
				break;
			}
		}
		for (let i = line.length - 1; i >= 0; i--) {
			if (!isNaN(parseInt(line[i]))) {
				twoDigits += line[i];
				break;
			}
		}
		total += Number(twoDigits);
	}
	return total;
}

console.log(part1(day1Input)); //53194
