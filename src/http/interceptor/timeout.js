/**
 * Timeout Interceptor.
 */

export default function (request, next) {

    var timeout;

    if (request.timeout) {
        timeout = setTimeout(() => {
        	request.onTimeout && request.onTimeout();
            request.abort();
        }, request.timeout);
    }

    next((response) => {

        clearTimeout(timeout);

    });
}
