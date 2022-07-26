import { OrdinalNumber, getOrdinalNumber } from './get-ordinal-number';

interface Test {
	input: number,
	output: OrdinalNumber,
}

const tests: Test[] = [
	{ input: 0, output: '0th' },
	{ input: 1, output: '1st' },
	{ input: 2, output: '2nd' },
	{ input: 3, output: '3rd' },
	{ input: 4, output: '4th' },
	{ input: 11, output: '11th' },
	{ input: 12, output: '12th' },
	{ input: 13, output: '13th' },
	{ input: 4001, output: '4001st' },
	{ input: 542122, output: '542122nd' },
	{ input: 423, output: '423rd' },
	{ input: 1049, output: '1049th' },
];

describe('testing getOrdinalNumber', () => {
	it.each(tests)('should return the ordinal string for the given number', (test) => {
		const output = getOrdinalNumber(test.input);
		expect(output).toStrictEqual(test.output);
	});
});
