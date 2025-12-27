// https://leetcode.com/problems/unique-email-addresses

type TStripLocal<Str extends string> = Str extends `${infer first}${infer rest}`
	? first extends "+"
		? ""
		: first extends "."
			? TStripLocal<rest>
			: `${first}${TStripLocal<rest>}`
	: "";
type TStripEmail<Email extends string> =
	Email extends `${infer local}@${infer domain}`
		? `${TStripLocal<local>}@${domain}`
		: Email;

type _TUniqueEmails<
	Emails extends string[],
	union extends string = never,
	count extends Array<1> = [],
> = Emails extends [infer first extends string, ...infer rest extends string[]]
	? TStripEmail<first> extends infer stripped extends string
		? stripped extends union
			? _TUniqueEmails<rest, union, count>
			: _TUniqueEmails<rest, union | stripped, [...count, 1]>
		: _TUniqueEmails<rest, union, count>
	: count["length"];

type TUniqueEmails<Emails extends string[]> = string[] extends Emails
	? number
	: _TUniqueEmails<Emails>;

export const uniqueEmailsRegex = <const Emails extends string[]>(
	emails: Emails,
): TUniqueEmails<Emails> => {
	const set = new Set<string>();
	for (const email of emails) {
		const regex = /(\.|\+.*)(?=.*@)/gu;
		set.add(email.replace(regex, ""));
	}
	return set.size as never;
};

export const uniqueEmailsManual = <const Emails extends string[]>(
	emails: Emails,
): TUniqueEmails<Emails> => {
	const set = new Set<string>();
	for (const email of emails) {
		let simple = "";
		let status: "local" | "ignore" | "domain" = "local";
		for (const char of email) {
			if (char === "@") status = "domain";
			if (status === "local" && char === "+") status = "ignore";
			if (status === "ignore") continue;
			if (status === "local" && char === ".") continue;
			else simple += char;
		}
		set.add(simple);
	}
	return set.size as never;
};

export const uniqueEmailsManualWithSlice = <const Emails extends string[]>(
	emails: Emails,
): TUniqueEmails<Emails> => {
	const seen = new Set<string>();

	for (const email of emails) {
		let simple = "";
		let ignore = false;
		let i = 0;
		for (; i < email.length; i++) {
			const ch = email[i] as string;
			if (ch === "@") break;
			if (ignore) continue;
			if (ch === "+") ignore = true;
			else if (ch !== ".") simple += ch;
		}
		simple += email.slice(i);
		seen.add(simple);
	}

	return seen.size as never;
};
