export const RENAME_ERRORS = {
	badArguments:
		"invalid arguments provided. use -h or --help to check the correct usage",
	badPath: "the given path must be a directory",
	exists: "path already exists",
} as const;

export const RENAME_RESULT_TYPE = ["success", "error", "unchanged"] as const;

export type TRenameResultType = (typeof RENAME_RESULT_TYPE)[number];

type TAgnosticResult = {
	type: TRenameResultType;
	path: string;
	oldName: string;
	newName?: string;
	error?: string;
	children?: TRenameResult[];
};

type TValidResult = {
	type: "success";
	newName: string;
	error?: undefined;
} & TAgnosticResult;

type TErrorResult = {
	type: "error";
	newName: string;
	error: string;
} & TAgnosticResult;

type TUnchangedResult = {
	type: "unchanged";
	newName?: undefined;
	error?: undefined;
} & TAgnosticResult;

export type TRenameResult = TErrorResult | TUnchangedResult | TValidResult;

export type TRenameOptions = {
	verbose?: boolean;
	yes?: boolean;
	onlyChanges?: boolean;
	tree?: boolean;
	help?: boolean;
};
