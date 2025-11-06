export type TBinaryTreeNode<Type = unknown> = {
	val: Type;
	left: TBinaryTreeNode<Type>;
	right: TBinaryTreeNode<Type>;
} | null;

export const arrayToBinaryTree = <T>(
	arr: Array<T | null>,
): TBinaryTreeNode<T> => {
	if (!arr.length) return null;

	const buildTree = (index: number): TBinaryTreeNode<T> => {
		const val = arr[index];
		if (val === null || val === undefined) return null;
		return {
			val,
			left: buildTree(2 * index + 1),
			right: buildTree(2 * index + 2),
		};
	};

	return buildTree(0);
};

export const binaryTreeToArray = <T>(
	root: TBinaryTreeNode<T>,
): Array<T | null> => {
	const arr: Array<T | null> = [];

	const buildArray = (node: TBinaryTreeNode<T>, idx: number) => {
		if (!node) return;
		arr[idx] = node.val ?? null;
		buildArray(node.left, 2 * idx + 1);
		buildArray(node.right, 2 * idx + 2);
	};

	buildArray(root, 0);
	let lastIdx = arr.length - 1;
	for (lastIdx; lastIdx >= 0; lastIdx--) {
		const val = arr[lastIdx] ?? null;
		if (val !== null) break;
	}
	arr.splice(lastIdx + 1);
	for (let idx = 0; idx < arr.length; idx++) arr[idx] ??= null;

	return arr;
};
