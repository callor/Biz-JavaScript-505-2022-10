import http from "http";

const host = "127.0.0.1";
const port = 3000;

// client 로 부터 요청이 들어왔을때 실행하는 함수
const createCallback = () => {
  console.log("Server Create");
};
const server = http.createServer(createCallback);
server.listen(port, host, () => {
  console.log("Start Server");
});
