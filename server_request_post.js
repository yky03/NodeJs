/*
/POST 형태의 요청은 GET과는 요청하는 측의 데이터 구조가 다릅니다. 
GET의 경우는 앞장에서 학습한것과 같이 주소의 끝에 ?(물음표)를 붙이고 뒤에 변수명=값 형태로 요청을 하지만, 
POST는 주소만 요청하고 변수와 값을 주소가 아닌 요청 BODY에 담아서 서버측에 요청합니다.
*/

var http = require('http');
var querystring = require('querystring');

var server = http.createServer(function(request,response){
  // 1. post로 전달된 데이터를 담을 변수를 선언
  var postdata = '';
  // 2. request객체에 on( ) 함수로 'data' 이벤트를 연결
  request.on('data', function (data) {
    // 3. data 이벤트가 발생할 때마다 callback을 통해 postdata 변수에 값을 저장
    postdata = postdata + data;
  });

  // 4. request객체에 on( ) 함수로 'end' 이벤트를 연결
  request.on('end', function () {
    // 5. end 이벤트가 발생하면(end는 한버만 발생한다) 3번에서 저장해둔 postdata 를 querystring 으로 객체화
    var parsedQuery = querystring.parse(postdata);
    // 6. 객체화된 데이터를 로그로 출력
    console.log(parsedQuery);
    // 7. 성공 HEADER 와 데이터를 담아서 클라이언트에 응답처리
    response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    response.end('var1의 값 = ' + parsedQuery.var1);
  });

});

server.listen(8080, function(){
    console.log('Server is running...');
});