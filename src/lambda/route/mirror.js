/**
 * Converts a list of functions to a mappable form that accepts argument list 
 * to be sent to each function in the list. The return from this new function
 * will be an ordered Array with all of the results from each invocation in the
 * list.
 * 
 * @param {...Function} fs The list of functions to send all arguments to.
 * @returns {Function} The curried function that accepts an argument list.
 */
export const mirror = (...fs) => (...xs) => fs.map(f => f(...xs));
