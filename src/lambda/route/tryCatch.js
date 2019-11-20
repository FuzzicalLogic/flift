/**
 * Wraps a function in a Try/Catch and invokes the associated function depending
 * upon whether the invocation succeeded (success) or an exception is caught 
 * (failure).
 * 
 * @param {Function} success The Function to invoke if no exception is caught. The
 * result of the original invocation will be sent as an argument.
 * @param {Function} failure The Function to invoke if an exception is caught. The
 * exception will be sent as an argument.
 */
export const tryCatch = (success, failure) => f => {
	try {
		return success(f())
	}
	catch (err) {
		return failure(err)
	}
}
