let http = require('http');
let url = require('url');

function start(route, handle) {
    function onRequest(request, response){
        let pathname = url.parse(request.url).pathname;
        let queryObject = url.parse(request.url, true).query;
        route(pathname, handle, response, queryObject.productId)
    }

    http.createServer(onRequest).listen(8888);
}

exports.start = start;