// http 도구 import
// commons.js 방식, ES5 이전 방식
// const http = require("http");
// ES5 이후의 module 방식
import http from "http";
const host = "127.0.0.1";
const port = 5000;

/**
 * Number() 함수가 실행되어 결과를 만들고
 * 그 결과를 log() 함수에게 전달하여
 * console 에 출력하기
 * 여기에서 Number() 함수 log() 함수는
 * 어떤 조건없이 코드가 start 되면 즉시 실행된다
 */
console.log(Number("30"));
const strNum = "30";
const intNum = Number(strNum);
console.log(intNum);

/**
 * click 이라는 event 가 발생했을때만
 * 익명함수( ()=>{}  ) 가 실행된다
 * if 문 같은 명령문이 없지만
 * click 이 되었을때 라는 전제 조건이 만족했을때
 * 함수가 실행된다
 * 이러한 함수를 Callback 함수 라고 한다
 */
// document.addEventListener("click", () => {});

/**
 * http 프로콜을 사용하여 서버가 잘(정상적으로)
 * 생성(createServer) 되었을 때
 * (req,res)=>{} 함수가 실행된다
 */
const createServerCallback = (req, res) => {
  res.statusCode = 404;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Hello Korea</h1>");
};
const server = http.createServer(createServerCallback);

const listenCallback = () => {
  console.log(`서버 시작 http://localhost:${port}`);
};
// host(http://127.0.0.1) 주소에서 기다리기 시작하게 되면
// listenCallback 함수를 가져와서 실행하라
// JS 에서 모든 함수는 1급 함수이다
// 1급 함수는 Callback 으로 사용할수 있고
//      다른 함수에 변수처럼 전달 할 수 있다
server.listen(port, host, listenCallback);
