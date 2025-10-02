// https://leetcode.com/problems/assign-cookies

export const assignCookies = (
	children: number[],
	cookies: number[],
): number => {
	children.sort((a, b) => a - b);
	cookies.sort((a, b) => a - b);
	let result = 0;
	let child = 0;
	let cookie = 0;
	while (children[child] && cookies[cookie]) {
		if ((children[child] as number) <= (cookies[cookie] as number)) {
			result++;
			child++;
		}
		cookie++;
	}
	return result;
};
