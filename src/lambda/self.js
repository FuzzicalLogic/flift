/**
 * Performs an self-application for a given function. Self-application is when
 * a function runs with itself as the argument.
 * 
 * @param {Function} f The function to self-apply
 */
export const self = f => f(f);
