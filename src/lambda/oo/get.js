/**
 * Curried function that gets a given property from any object.
 * 
 * @param {any} key The key of the property value to retrieve
 * @returns {Function} Curried form of get().
 */
export const get = key => o => o[key];
