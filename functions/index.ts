import { onRequestOptions, onRequest as originalOnRequest } from "./[[default]]";

enum HttpMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
    PATCH = "PATCH",
    HEAD = "HEAD",
    OPTIONS = "OPTIONS"
}

const onRequest = async (request: Request) => {
    const method = request.method as HttpMethod;
    switch (method) {
        case HttpMethod.GET:
            console.log('Handling GET request');
            break;
        case HttpMethod.POST:
            console.log('Handling POST request');
            break;
        case HttpMethod.PUT:
            console.log('Handling PUT request');
            break;
        case HttpMethod.DELETE:
            console.log('Handling DELETE request');
            break;
        case HttpMethod.PATCH:
            console.log('Handling PATCH request');
            break;
        case HttpMethod.HEAD:
            console.log('Handling HEAD request');
            break;
        case HttpMethod.OPTIONS:
            return onRequestOptions(request);
        default:
            console.log('Unsupported request method');
    }
    return originalOnRequest(request);
};

export { onRequestOptions, onRequest };
