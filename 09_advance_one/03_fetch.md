# Fetch
[MDN docs link](https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch)
#
The fetch() method of the Window interface starts the process of fetching a resource from the network, returning a promise that is fulfilled once the response is available.

### Interview pov
A fetch() promise only rejects when the request fails, for example, because of a badly-formed request URL or a network error. A fetch() promise does not reject if the server responds with HTTP status codes that indicate errors (404, 504, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.

##
![Image](https://i.postimg.cc/gJGGtjQL/fetch.png)
