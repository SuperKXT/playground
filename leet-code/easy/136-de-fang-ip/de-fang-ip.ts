// https://leetcode.com/problems/defanging-an-ip-address

// export const deFangIp = (address: string): string => {
// 	return address.replace(/\./gu, "[.]");
// };

export const deFangIp = (address: string): string => {
	return address.replaceAll(".", "[.]");
};
