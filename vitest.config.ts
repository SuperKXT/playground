/* eslint-disable import/no-default-export */
import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		clearMocks: true,
		coverage: {
			enabled: true,
			reporter: ["html"],
		},
		environment: "node",
		typecheck: {
			include: ["**/*.test.{ts,tsx}"],
		},
	},
});
