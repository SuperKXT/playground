// https://leetcode.com/problems/unique-email-addresses

// export const uniqueEmails = (emails: string[]): number => {
//     const set = new Set<string>();
//     for (const email of emails) {
//         const regex = /(\.|\+.*)(?=.*@)/gu;
//         set.add(email.replace(regex, ''));
//     }
//     return set.size;
// };

export const uniqueEmails = (emails: string[]): number => {
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
	return set.size;
};
