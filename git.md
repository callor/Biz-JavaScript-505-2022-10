# github repository 업로드

## https://github.com 계정생성

## repository 도구 설치

- https://git-scm.com 에서 다운로드 설치

## github 에 새로운 repository 생성

- github 에 login 한 후 new repository 실행하여 생성

## local project Upload 하기

### local repository 만들기

- local repository 는 내 PC 에 저장된 프로젝트를 github 에 업로드하기 위하여 압축하는 절차

1. 프로젝트 폴더에서 Git bash here 실행

2. local 에 계정 정보 저장하기

- git config --global user.name callor
- git config --global user.email callor@callor.com
- PC 를 교체했거나, 윈도우를 재 설치했거나, 최초로 github 와 연동할때 만 실행

3. local repository 생성하기

- git init

4. 원격(remote, origin) repository 정보 저장하기

- 새로운 repository를 생성했을 때문
- git remote add origin https://github.com/callor/Biz_JavaScript_2022_10_505.git
- origin 이라는 이름으로 github 의 원격 repository 주소를 등록하는 절차

5. 프로젝트를 압축하여 local repository(.git 폴더)에 저장하기

- git add .
- git commit -m "Comment"

6. 업로드하기

- git push -u origin master

## 프로젝트 수정(변경, 추가, 내용삭제)

- git add .
- git commit -m "수정한 내용 Comment"
- git push

## github 에서 최초로 프로젝트 다운로드 받기

- github.com 에 로그인하기
- repository 의 주소 복사하기
- bash 를 열고
- git clone 주소붙이기(Shift+ins)

## 다운로드 후에 내용 변경한 후 다시 push

- git add .
- git commit -m "다시 PUSH"
- git push

## 원격 repository 에서 변경된 내용 가져오기

- git pull

## github 에 업로드 금지 정책 만들기

- 보안이 요구되거나, 파일의 크기가 너무 큰 파일(100M 이상), 파일을 보관할 필요가 없는 경우 그러한 파일은 github.com 에 업로드 하지 말아야 한다
- 업로드가 필요없는 파일을 제외하고 push 하기 위하여  
  `.gitignore` 파일을 생성하고 여기에 정보를 등록한다

### `.gitignore` 파일 만들기

- 파일이름의 첫글자가 dot(.)로 시작하면 윈도우에서는 만들수 있는 방법이 없다.
- git bash 에서 명령으로 빈(blank) 파일을 생성해야 한다  
  `touch .gitignore` : linux 명령

## node project 의 .gitignore 설정 주의!!!

- nodeJS 관련 프로젝트를 수행할때는 반드시 .gitignore 파일을 생성하고 node_modules 폴더를 등록해 주어야 한다
