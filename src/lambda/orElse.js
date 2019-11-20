/**
 * Creates a function that will check values against a condition, and return the
 * original value (when `true`) or a default value (when `false`).
 * 
 * @param {Function} predicate Function containing the condition to check the 
 * value against.
 * @param {any} defaultValue The value to return, if the condition fails
 * @returns {Function} Function that will return either the value or a default
 * value when the condition fails
 */
export const orElse = (predicate, defaultValue) =>
		value => predicate(value) === true ? value : defaultValue;
