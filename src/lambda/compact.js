/**
 * Converts a n-arity function into a 1-arity function whose arguments may be
 * passed using an Array.
 * 
 * @example
 * const add = (x, y) => x + y;
 * const add2 = compact(add);
 *
 * let result = add2([1,2]);

 * @param {Function} f The function to compact the arguments for
 * @returns {Function} The compacted version of the function
 *
 */
export const compact = f => xs => f(...xs);
