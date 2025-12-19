// https://leetcode.com/problems/defanging-an-ip-address

type TDeFangIp<Address extends string> =
	Address extends `${infer before}.${infer after}`
		? `${before}[.]${TDeFangIp<after>}`
		: Address;

// export const deFangIp = <Address extends string>(
// 	address: Address,
// ): TDeFangIp<Address> => {
// 	return address.replace(/\./gu, "[.]") as never;
// };

export const deFangIp = <Address extends string>(
	address: Address,
): TDeFangIp<Address> => {
	return address.replaceAll(".", "[.]") as never;
};
