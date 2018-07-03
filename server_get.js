// 1. 서버 사용을 위해서 http 모듈을 http 변수에 담는다. (모듈과 변수의 이름은 달라도 된다.) 
var http = require('http'); 

// html파일 로딩해보기
var fs = require('fs');

//4. 요청한 url을 객체로 만들기 위해 url 모듈사용
var url = require('url');

//5. 요청한 url 중에 Query String 을 객체로 만들기 위해 querystring 모듈 사용
var querystring = require('querystring');

// 2. http 모듈로 서버를 생성한다.
//    아래와 같이 작성하면 서버를 생성한 후, 사용자로 부터 http 요청이 들어오면 function 블럭내부의 코드를 실행해서 응답한다.
var server = http.createServer(function(request,response){ //익명함수 이벤트발생시 callback

	// 6. 콘솔화면에 로그 시작 부분을 출력
    console.log('--- log start ---');
    // 7. 브라우저에서 요청한 주소를 parsing 하여 객체화 후 출력
    var parsedUrl = url.parse(request.url);
    console.log(parsedUrl);
    // 8. 객체화된 url 중에 Query String 부분만 따로 객체화 후 출력
    var parsedQuery = querystring.parse(parsedUrl.query,'&','=');
    console.log('---------------------^^');
    console.log(parsedQuery);
    // 9. 콘솔화면에 로그 종료 부분을 출력
    console.log('--- log end ---');
	
  response.writeHead(200,{'Content-Type':'text/html;  charset=utf-8'}); //200 : 요청에대해 정상적으로 값을 리턴할때 사용 text/html 형태
    //response.end('Hello node.js!!!');
   // response.end('var1의 값은 '+parsedQuery.var1);
    response.end('var\n1의값=' + parsedQuery.var1 + ', var2의값=' + parsedQuery.var2 + ', var3의값=' +parsedQuery.var3);
   /* fs.readFile('load.html' , function(error,data){
    	response.writeHead(200,{'Content-Type':'text/html'});
    	response.end(data);
    });*/

});

// 3. listen 함수로 8080 포트를 가진 서버를 실행한다. 서버가 실행된 것을 콘솔창에서 확인하기 위해 'Server is running...' 로그를 출력한다
server.listen(8080, function(){ 
    console.log('Server is running...');
});


//10. http://localhost:8080/?var1=newData&var2=153&var3=testdata2017


/*로그를 보면 --- log start --- 와 --- log end --- 가 두번 출력되었습니다. 
이유는 서버로 요청시 기본적으로 표시되는 favicon 이라는 아이콘을 브라우저에서 
 요청하였기 때문입니다. 네이버 홈페이지를 예로 들면 아래와 같이 페이지 
 타이틀 앞에 녹색 아이콘이 favicon 입니다. 이는 브라우저의 기본동작이므로 
 아랫쪽의 log 는 따로 설명하지 않겠습니다.*/