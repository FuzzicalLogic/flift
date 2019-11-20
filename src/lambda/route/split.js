/**
 * Curries a list of unary function such that when passed a list of arguments 
 * will map each value to the function sharing the same index. The result of 
 * this curried function will be an Array of the return values of each call.
 * 
 * @param {...Function} fs The list of functions to split the arguments list 
 * between
 * @returns {Function} 
 */
export const split = (...fs) => (...xs) => fs.map((f, n) => f(xs[n]));
