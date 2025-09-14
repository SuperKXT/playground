export type TBinaryTreeNode<Type = unknown> = {
	val: Type;
	left: TBinaryTreeNode<Type>;
	right: TBinaryTreeNode<Type>;
} | null;

export const arrayToBinaryTree = <T>(arr: T[]): TBinaryTreeNode<T> => {
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
