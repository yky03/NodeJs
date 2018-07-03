//부록 http request

var http = require('http');

var server = http.createServer(function(request,response){
  console.log(request);  //요청시 출력
});

server.listen(8080, function(){
    console.log('Server is running...');
});

//부록 http 상태코드

/*Part of Hypertext Transfer Protocol -- HTTP/1.1 (출처 : w3.org)
100
요청을 받았고, 작업을 진행 중이라는 의미입니다. HTTP/1.0 이후 정의되어 있지 않기 때문에 서버는 클라이언트에게 이 코드를 보내지 않습니다.
100	Continue
101	Switching Protocols
200
요청이 정상적으로 처리 되었을 때 사용합니다.
200	OK
201	Created
202	Accepted
203	Non-Authoritative Information
204	No Content
205	Reset Content
206	Partial Content
300
클라이언트가 Redirection 등의 추가적인 작업을 해야 한다는 의미입니다.
브라우저에서 요청했을 경우 응답을 받은 브라우저는 다른페이지로 Redirection 처리를 하고 작업을 완료합니다.
300	Multiple Choices
301	Moved Permanently
302	Found
303	See Other
304	Not Modified
305	Use Proxy
306	(Unused in version 1.1)
307	Temporary Redirect
400
요청이 잘못되었을 때 사용합니다. 예를 들어 주소체계가 틀렸거나, 존재하지 않는 페이지를 요청했을 때 사용합니다.
400	Bad Request
401	Unauthorized
402	Payment Required
403	Forbidden
404	Not Found
405	Method Not Allowed
406	Not Acceptable
407	Proxy Authentication Required
408	Request Timeout
409	Conflict
410	Gone
411	Length Required
412	Precondition Failed
413	Request Entity Too Large
414	Request-URI Too Long
415	Unsupported Media Type
416	Requested Range Not Satisfiable
417	Expectation Failed
500
요청은 정상적이지만 서버측 오류로 정상적인 처리가 되지 않았을때 사용합니다. 일반적인 서버오류에 많이 사용됩니다.
500	Internal Server Error
501	Not Implemented
502	Bad Gateway
503	Service Unavailable
504	Gateway Timeout
505	HTTP Version Not Supported*/