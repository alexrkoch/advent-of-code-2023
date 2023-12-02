import input from "./input.txt";

export function main(input: string): number {
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

console.log(main(input)); //53194
