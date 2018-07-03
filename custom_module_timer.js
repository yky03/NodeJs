//매초 이벤트를 이용해서 콘솔상에 주기적으로 현재시간을 출력하는 타이머 모듈

/*  서버URI(디렉토리 + 파일) [ http://www.naver.com ]도메인 [ /my_page/firstpage ]서버URI [ ?section=15 ]쿼리스트링
 *  uri(uniform resource identifer) : 통합 자원 식별자 (url+urn) , was 동적인 자원 .do
 *  url(uniform resource locator) : 통합 자원 위치 표시(이미지파일,html파일등 위치를 표시하기 위한 주소)
 *  urn(uniform resource name) : 통합 자원 이름 (파일이름만으로 찾는것, 앞경로 상관없이 x.jpg 등 , 거의 사용x)
 */

var EventEmitter = require('events');
// 1. setInterval 함수가 동작하는 interval 값을 설정합니다. 1초에 한번씩 호출
var sec = 1;

// 2. timer변수를 EventEmitter 로 초기화
exports.timer = new EventEmitter();

// 3. javascript 내장함수인 setInterval 을 사용해서 1초에 한번씩 timer 객체에 tick 이벤트 발생
setInterval(function(){
    exports.timer.emit('tick');
}, sec*1000);