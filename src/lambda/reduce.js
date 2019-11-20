/**
 * Higher order function that accepts a function and an initial value and curries
 * back a function that reduces any number of inputs to a single return value.
 * 
 * @function
 * @param {Function} f The function that will be used as an accumulator
 * @param {any} initial The value to start the accumulator with
 * @returns {Function} Funtion to be used as a reducer
 *
 * @see Array.prototype.reduce
 */
export const reduce = (f, initial) =>
	(...xs) => (typeof initial === "undefined")
		? xs.reduce(f)
		: xs.reduce(f, initial);
