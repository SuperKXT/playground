import crypto from "node:crypto";

import { intro, log, outro, select } from "@clack/prompts";

import { config } from "../../config.js";
import { stringifyError } from "../../helpers/error.helpers.js";
import { confirmPrompt, unwrapPrompt } from "../../helpers/prompt.helpers.js";

const MAX_CHOICE = 5;
const PRIZE = 10;

const spin = async (
	score: number = PRIZE,
	multiplier: 1 | 2 = 1,
): Promise<number> => {
	const choice = unwrapPrompt(
		await select({
			message: `Your pick?`,
			options: Array.from({ length: MAX_CHOICE + 1 }, (_, value) => ({
				label: String(value),
				value,
			})),
		}),
	);
	const spinResult = crypto.randomInt(0, MAX_CHOICE + 1);
	const correct = spinResult === choice;
	if (correct) {
		const newScore = score * multiplier;
		log.success(`CORRECT! You have $${newScore}`);
		const isDouble = await confirmPrompt("Double or Nothing?");
		if (!isDouble) return newScore;

		return await spin(newScore, 2);
	}
	log.error(`INCORRECT! Spin Result: ${spinResult}, Your Choice: ${choice}`);
	return 0;
};

export const doubleOrNothing = async (): Promise<number> => {
	intro("Welcome to Spin The Wheel!");
	const score = await spin();
	outro(`GAME OVER! You Won: $${score}`);
	const replay = await confirmPrompt("Go Again?");
	if (replay) return await doubleOrNothing();

	return score;
};

if (config.isTest)
	doubleOrNothing().catch((error: unknown) => {
		console.error(stringifyError(error));
	});
