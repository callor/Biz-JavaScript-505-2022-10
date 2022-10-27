# NodeJS Web Application Server 만들기

## `www.js` 파일 생성

### Server Create

- http import 하기 : `import http from "http"`
- 서버 생성하기 : `const server = http.createServer(callback)`
- 서버 시작하기 : `server.listen()`

### Web Application Server 를 구축하기 위한 도구 설치

- express 설치하기 : 프로젝트 폴더에서 `npm install -save express`  
  이 명령을 실행하면 package.json 에 dependencies 항목이 생성되고 node_modules 폴더가 생성된 후 필요한 3rd party 도구들이 자동 다운로드되어 포함된다.
