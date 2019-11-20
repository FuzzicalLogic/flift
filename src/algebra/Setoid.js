/**
 * Creates a new Functor Type from a function. A Functor is the most basic of
 * the algebrae and when mapped will automatically recontextualize the result
 * to a new instance of the Type.
 * 
 * @param {any} fMap The function that is used to map any function to the value.
 *
 * @todo The exportation is the same every time for all Algebraics:
 *     1. The new Type starts as a new object
 *     2. Add an 'of' method that acts as the constructor
 *			a. During instantiation, 'of' binds the algebrae with the value
 */
export const Setoid = (equals) => {
	let algebra = {
		equals: equals
	}
	let exported = x => ({
		equals: algebra.equals(x)
	});
	exported.algebra = algebra;
	return exported;
};

