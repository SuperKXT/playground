import { cancel, confirm, isCancel } from "@clack/prompts";

export const unwrapPrompt = <T>(value: T | symbol): T => {
	if (isCancel(value)) {
		cancel("Operation cancelled");
		// eslint-disable-next-line n/no-process-exit
		process.exit(0);
	}
	return value;
};

export const confirmPrompt = async (message: string): Promise<boolean> =>
	unwrapPrompt(await confirm({ message }));
