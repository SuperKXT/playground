type TIngredient = { name: string; amount: number };

export const calculateIngredients = (
	ingredients: TIngredient[],
	servings: number,
): TIngredient[] => {
	return ingredients.map((r) => ({ ...r, amount: r.amount * servings }));
};
