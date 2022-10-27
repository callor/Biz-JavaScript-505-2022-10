# NodeJS Web Application Server 만들기

## `www.js` 파일 생성

### Server Create

- http import 하기 : `import http from "http"`
- 서버 생성하기 : `const server = http.createServer(callback)`
- 서버 시작하기 : `server.listen()`

## NodeJS 프로젝트 github 와 연동할때 주의사항

- node_modules 폴더는 절대 업로드 금지
- NodeJS 프로젝트를 github 에서 clone, pull 한 후에는  
  반드시 `npm install` 을 실행해 준다 : dependencies 다시 다운로드

### Web Application Server 를 구축하기 위한 도구 설치

- express 설치하기 : 프로젝트 폴더에서 `npm install -save express`  
  이 명령을 실행하면 `package.json` 에 `dependencies` 항목이 생성되고  
  `node_modules` 폴더가 생성된 후  
  필요한 3rd party 도구들이 자동 다운로드되어 포함된다.
