/**
 * express 도구를 install
 * http 서버를 생성하고
 * GET / 로 요청하면 "반갑습니다"
 * GET /user 로 요청하면 "안녕하세요"
 * 라고 보이도록
 */
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);
server.listen(3000, "127.0.0.1", () => {
  console.log("Server Start OK~~~");
});

app.use("/", (req, res, next) => {
  res.setHeader("Content-Type", "text/html;charset=UTF-8");
  next();
});

app.get("/", (req, res) => {
  /**
   * 여러번 text 를 보내고 싶을때는 write() 로 보내고
   * 제일 마지막에 end() 로 마감한다
   */

  res.write("안녕하세요<hr/>");
  res.write("오늘은 목요일<hr/>");
  res.end("금요일이면 좋겠네<hr/>");
});

app.get("/user", (req, res) => {
  // 한번만 보낼수 있다.
  res.send("안녕하세요");
});
