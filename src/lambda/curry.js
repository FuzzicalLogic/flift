/**
 * Allow a non-variadic function of finite and specific arity to be split into
 * multiple calls, such that the function is not called until all arguments have
 * been passed and the arity requirement is fulfilled.
 * 
 * @param {Function} f The function to convert to curried form
 * @param {...any} xs The arguments to initialize the currying with
 * 
 * @returns {Function} The curried form of the function
 */
export const curry = (f, ...xs) =>
	(f.length <= xs.length)
		? f(...xs)
		: (...more) => curry(f, ...xs, ...more);
