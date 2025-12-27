import {
	uniqueEmailsManual,
	uniqueEmailsManualWithSlice,
	uniqueEmailsRegex,
} from "./unique-emails.js";

function benchmark(
	name: string,
	fn: (emails: string[]) => number,
	emails: string[],
) {
	// warm-up
	for (let i = 0; i < 10; i++) fn(emails);

	const start = performance.now();
	for (let i = 0; i < iterations; i++) fn(emails);
	const end = performance.now();

	const total = end - start;
	console.info(`${name}: ${(total / iterations).toFixed(3)} ms`);
}

function generateEmails(count: number): string[] {
	const result: string[] = [];

	for (let i = 0; i < count; i++) {
		const local = `user.${i % 1000}${
			i % 3 === 0 ? "+newsletter" : ""
		}${i % 5 === 0 ? ".extra" : ""}`;
		const domain = `example${i % 10}.com`;

		result.push(`${local}@${domain}`);
	}

	return result;
}

const iterations = 100_000;
const emails = generateEmails(iterations);

console.info("Benchmarking uniqueEmails");
console.info(`Iterations: ${iterations}`);
benchmark("Regex", uniqueEmailsRegex, emails);
benchmark("Manual Scan", uniqueEmailsManual, emails);
benchmark("Manual Scan /w Slice", uniqueEmailsManualWithSlice, emails);
