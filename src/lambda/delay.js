/**
 * Allows a function to be called at a later date with the specified arguments.
 * 
 * @param {Function} f
 * @returns {Function} Curried function that accepts and saves the arguments
 * with which that function will be run with at a later date.
 */
export const delaySync = f => (...xs) => () => f(...xs);

/**
 * Allows a function to be called asynchronously at a later date with the 
 * specified arguments.
 *
 * @param {Function} f
 * @returns {Function} Curried function that accepts and saves the arguments
 * with which that function will be run with at a later date.
 */
export const delay = f => (...xs) => async () => await f(...xs);
