/**
 * Wraps a value in a function call that always returns the original value,
 * essentially making the value immutable.
 * 
 * @param {any} x The value to make immutable
 * @returns {Function} The getter for the immutable value
 */
export const constant = (x) => () => x;
export { constant as always };
