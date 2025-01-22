type TIngredientList<
	Recipe extends string[],
	Pantry extends string[],
	_Count extends 1[] = [],
> = Recipe extends [infer ingredient, ...infer rest extends string[]]
	? TIngredientList<
			rest,
			Pantry,
			ingredient extends Pantry[number] ? _Count : [..._Count, 1]
		>
	: _Count["length"];

export const ingredientList = <
	const Recipe extends [string, ...string[]],
	const Pantry extends [string, ...string[]],
>(params: {
	recipe: Recipe;
	pantry: Pantry;
}): TIngredientList<Recipe, Pantry> => {
	let count = 0;
	for (const ingredient of params.recipe) {
		if (!params.pantry.includes(ingredient)) count++;
	}
	return count as never;
};
