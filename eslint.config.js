import { fileURLToPath } from "node:url";

import js from "@eslint/js";
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";
import { importX } from "eslint-plugin-import-x";
import node from "eslint-plugin-n";
import "eslint-plugin-only-warn";
import unusedImports from "eslint-plugin-unused-imports";
import vitest from "eslint-plugin-vitest";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig([
	{
		name: "plugin-registration",
		plugins: {
			"@typescript-eslint": tseslint.plugin,
			"unused-imports": unusedImports,
			vitest,
		},
		settings: {
			"import-x/resolver-next": [createTypeScriptImportResolver()],
			vitest: { typecheck: true },
		},
	},

	{
		name: "global-ignores",
		ignores: [
			"**/node_modules",
			"**/build",
			"**/dist",
			"**/coverage",
			"**/.git/objects",
			"**/.vscode",
			"**/.vscode-insiders",
			"**/public",
			"**/trace",
			"**/*.mp3",
			"**/tsconfig.vitest-temp.json",
			"package-lock.json",
			"pnpm-lock.yaml",
			"vscode-extension",
		],
	},

	js.configs.recommended,
	tseslint.configs.strictTypeChecked,
	tseslint.configs.stylisticTypeChecked,
	// @ts-expect-error https://github.com/typescript-eslint/typescript-eslint/issues/11543
	importX.flatConfigs.recommended,
	// @ts-expect-error https://github.com/typescript-eslint/typescript-eslint/issues/11543
	importX.flatConfigs.typescript,
	node.configs["flat/recommended-module"],

	{
		name: "base",
		files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
		languageOptions: {
			globals: { ...globals.es2025, ...globals.node },
			parserOptions: {
				projectService: true,
				tsconfigRootDir: __dirname,
			},
		},
		linterOptions: {
			reportUnusedDisableDirectives: true,
		},
		rules: {
			"array-callback-return": ["warn", { checkForEach: true }],
			"default-case-last": "warn",
			eqeqeq: "warn",
			"func-names": ["warn", "never"],
			"guard-for-in": "warn",
			"logical-assignment-operators": "warn",
			"max-depth": ["warn", { max: 7 }],
			"max-params": ["warn", 5],
			"new-cap": "warn",
			"no-alert": "warn",
			"no-bitwise": "warn",
			"no-console": [
				"warn",
				{ allow: ["warn", "error", "info", "time", "timeEnd"] },
			],
			"no-constructor-return": "warn",
			"no-else-return": ["warn", { allowElseIf: false }],
			"no-extend-native": "warn",
			"no-extra-label": "warn",
			"no-implicit-coercion": ["warn", { disallowTemplateShorthand: true }],
			"no-label-var": "warn",
			"no-labels": ["warn", { allowLoop: true, allowSwitch: true }],
			"no-lone-blocks": "warn",
			"no-lonely-if": "warn",
			"no-multi-assign": "warn",
			"no-multi-str": "warn",
			"no-new": "warn",
			"no-new-object": "warn",
			"no-new-wrappers": "warn",
			"no-octal-escape": "warn",
			"no-param-reassign": "warn",
			"no-promise-executor-return": "warn",
			"no-restricted-imports": [
				"warn",
				{
					paths: [
						{ name: "buffer", message: "Use Uint8Array instead." },
						{ name: "node:buffer", message: "Use Uint8Array instead." },
						{
							name: "dayjs",
							importNames: ["default"],
							message: "Please import dayjsUtc helper from `~/helpers/date`.",
						},
					],
				},
			],
			"no-restricted-syntax": [
				"warn",
				{
					message: "Don't declare enums. Use POJO with as const instead",
					selector: "TSEnumDeclaration",
				},
			],
			"no-return-assign": "warn",
			"no-self-compare": "warn",
			"no-sequences": "warn",
			"no-template-curly-in-string": "warn",
			"no-unmodified-loop-condition": "warn",
			"no-unneeded-ternary": ["warn", { defaultAssignment: false }],
			"no-unreachable-loop": "warn",
			"no-unused-vars": "off",
			"no-useless-computed-key": ["warn", { enforceForClassMembers: true }],
			"no-useless-concat": "warn",
			"no-useless-rename": "warn",
			"no-useless-return": "warn",
			"object-shorthand": ["warn", "always"],
			"one-var": ["warn", "never"],
			"operator-assignment": "warn",
			"prefer-arrow-callback": "warn",
			"prefer-exponentiation-operator": "warn",
			"prefer-numeric-literals": "warn",
			"prefer-object-has-own": "warn",
			"prefer-object-spread": "warn",
			"prefer-const": "warn",
			"prefer-promise-reject-errors": "warn",
			"prefer-regex-literals": ["warn", { disallowRedundantWrapping: true }],
			"prefer-template": "warn",
			"require-unicode-regexp": "warn",
			strict: ["warn", "global"],
			yoda: "warn",

			"n/no-process-env": "warn",
			"n/no-unpublished-import": "off",
			"n/prefer-node-protocol": "warn",
			"n/no-missing-import": "off",
			"import-x/no-named-as-default-member": "off",
			"import-x/consistent-type-specifier-style": ["warn", "prefer-top-level"],
			"import-x/first": "warn",
			"import-x/newline-after-import": "warn",
			"import-x/no-commonjs": "warn",
			"import-x/no-default-export": "warn",
			"import-x/namespace": "off",
			"import-x/export": "off",
			"import-x/no-empty-named-blocks": "warn",
			"import-x/no-self-import": "warn",
			"import-x/no-useless-path-segments": "warn",
			"import-x/order": [
				"warn",
				{
					groups: [
						"builtin",
						"external",
						"internal",
						"sibling",
						"index",
						"parent",
						"type",
					],
					"newlines-between": "always",
				},
			],
			"unused-imports/no-unused-imports": "warn",
			"unused-imports/no-unused-vars": [
				"warn",
				{
					argsIgnorePattern: "^_",
					varsIgnorePattern: "^_",
					caughtErrors: "all",
					destructuredArrayIgnorePattern: "^_",
				},
			],

			"@typescript-eslint/method-signature-style": "warn",
			"@typescript-eslint/consistent-type-exports": "warn",
			"@typescript-eslint/consistent-type-imports": "warn",
			"@typescript-eslint/consistent-type-definitions": "off",
			"@typescript-eslint/default-param-last": "warn",
			"no-dupe-class-members": "off",
			"@typescript-eslint/no-dupe-class-members": "warn",
			"@typescript-eslint/no-explicit-any": [
				"warn",
				{ ignoreRestArgs: true, fixToUnknown: true },
			],
			"@typescript-eslint/no-inferrable-types": "off",
			"@typescript-eslint/no-loop-func": "warn",
			"@typescript-eslint/no-shadow": "warn",
			"no-constant-condition": "off",
			"@typescript-eslint/no-unnecessary-condition": [
				"warn",
				{ allowConstantLoopConditions: true },
			],
			"@typescript-eslint/no-unused-expressions": [
				"warn",
				{
					allowShortCircuit: true,
					allowTernary: true,
					enforceForJSX: true,
				},
			],
			"@typescript-eslint/no-unused-vars": "off",
			"@typescript-eslint/no-useless-empty-export": "warn",
			"@typescript-eslint/non-nullable-type-assertion-style": "off",
			"@typescript-eslint/prefer-nullish-coalescing": "off",
			"@typescript-eslint/promise-function-async": "warn",
			"@typescript-eslint/require-array-sort-compare": [
				"warn",
				{ ignoreStringArrays: true },
			],
			"@typescript-eslint/return-await": ["warn", "always"],
			"@typescript-eslint/switch-exhaustiveness-check": [
				"warn",
				{
					considerDefaultExhaustiveForUnions: true,
					requireDefaultForNonUnion: true,
				},
			],
			"@typescript-eslint/restrict-template-expressions": [
				"warn",
				{
					allowAny: false,
					allowBoolean: true,
					allowNullish: false,
					allowNumber: true,
					allowRegExp: false,
					allowNever: false,
				},
			],
			"@typescript-eslint/no-restricted-types": [
				"warn",
				{
					types: {
						Buffer: {
							message: "Use Uint8Array instead",
							suggest: ["Uint8Array"],
							fixWith: "Uint8Array",
						},
					},
				},
			],
			"@typescript-eslint/ban-ts-comment": [
				"warn",
				{ minimumDescriptionLength: 3 },
			],
			"@typescript-eslint/no-namespace": ["warn", { allowDeclarations: true }],
			"@typescript-eslint/naming-convention": [
				"warn",
				{
					selector: ["interface", "typeAlias"],
					format: ["PascalCase"],
					prefix: ["T", "_T"],
				},
			],
			"@typescript-eslint/array-type": ["warn", { default: "array-simple" }],
			"@typescript-eslint/no-empty-object-type": "off",
		},
	},

	{
		name: "tests",
		files: ["**/*.{test,spec}.ts"],
		extends: [vitest.configs.all],
		rules: {
			"vitest/prefer-expect-assertions": "off",
			"vitest/require-top-level-describe": "off",
			"vitest/max-expects": ["warn", { max: 10 }],
		},
	},

	{
		name: "configs",
		files: ["**/*.{js,cjs,mjs}"],
		rules: {
			"no-restricted-globals": "off",
			"@typescript-eslint/no-require-imports": "off",
			"import-x/no-nodejs-modules": "off",
			"import-x/no-default-export": "off",
			"import-x/no-commonjs": "off",
		},
	},

	{
		name: "cjs",
		files: ["**/*.cjs"],
		rules: {
			"import-x/no-commonjs": "off",
		},
	},

	{
		name: "type-challenges",
		files: ["type-challenges/**/*"],
		rules: {
			"@typescript-eslint/no-explicit-any": "off",
			"@typescript-eslint/naming-convention": "off",
			"unused-imports/no-unused-vars": "off",
		},
	},
]);
