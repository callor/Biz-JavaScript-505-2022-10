// http Service 용 서버를 만드는 도구
import http from "http";
// Web Application Server 를 구축하는 도구
// framework 라고 한다
import express from "express";

const host = "127.0.0.1";
const port = 3000;

// client 로 부터 요청이 들어왔을때 실행하는 함수
const createCallback = () => {
  console.log("Server Create");
};

// express framework를 사용하기 위한 도구
const app = express();
// nodejs 의 http 서비스와 express framework를 연동하기
const server = http.createServer(app);
server.listen(port, () => {
  console.log("Start Server");
});
/**
 * form 에서 POST method 로 전송된 데이터를
 * req.body 속성으로 접근하기 위한 설정
 */
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.end("Hello Root");
});

app.get("/user", (req, res) => {
  res.end("Hello User");
});
app.get("/user/:name", (req, res) => {
  res.setHeader("Content-Type", "text/html;charset=UTF-8");
  res.end(`Hello ${req.params.name} !!!`);
});

app.get("/korea", (req, res) => {
  res.end("Welcome to Korea");
});

/**
 * form 에서 입력된 데이터를 GET method 로 받기
 * GET method 로 데이터가 전달되면
 * 주소표시줄에 데이터가 노출되어 보안에 매우 취약하다
 * 또한 전체 문자열의 길이가 255자를 넘으면 데이터가 잘린다
 * 암호화 등을 전혀 수행할 수 없다
 *
 * 그래서 GET 는 주로 데이터를 서버에 요청할때 사용한다
 */
app.get("/input", (req, res) => {
  const query = req.query;
  const data = {
    이름: query.name,
    전화번호: query.tel,
    어디로: "오토바이,GET",
  };
  res.json(data);
});

/**
 * form 에서 입력한 데이터를 POST method 로 받기
 * form 에서 입력한 데이터를 POST 로 보내면
 *    form package의 body 영역에 데이터가 포장되어서
 *    전송된다
 * 이 데이터는 일단 주소표시줄에 노출되지 않고 감춰져서
 * 보안이 유리하다
 * 또한 body 영역에 포장된 데이터는 암호화가 비교적 쉽다
 * 따라서 암호화 도구(https)를 사용하면 데이터를 중간에
 *    탈취하기가 어려워 진다
 * body 영역에 포장된 데이터는 데이터 용량에 제한이 없다
 *    파일 업로드 등을 할때는 반드시 POST 로 전송해야 한다
 */
app.post("/input", (req, res) => {
  const body = req.body;
  const data = {
    이름: body.name,
    전화번호: body.tel,
    어디로: "우체국,POST",
  };
  res.json(data);
});
