# `cometo` - `헬퍼`

해커그라운드 해커톤에 참여하는 `cometo` 팀의 `헬퍼`입니다.

## 참고 문서

> 아래 두 링크는 해커톤에서 앱을 개발하면서 참고할 만한 문서들입니다. 이 문서들에서 언급한 서비스 이외에도 더 많은 서비스들이 PaaS, SaaS, 서버리스 형태로 제공되니 참고하세요.

- [순한맛](./REFERENCES_BASIC.md)
- [매운맛](./REFERENCES_ADVANCED.md)

## 제품/서비스 소개

<!-- 아래 링크는 지우지 마세요 -->
[제품/서비스 소개 보기](TOPIC.md)
<!-- 위 링크는 지우지 마세요 -->

## 오픈 소스 라이센스

<!-- 아래 링크는 지우지 마세요 -->
[오픈소스 라이센스 보기](./LICENSE)
<!-- 위 링크는 지우지 마세요 -->

## 설치 방법

> **아래 제공하는 설치 방법을 통해 심사위원단이 여러분의 제품/서비스를 실제 Microsoft 애저 클라우드에 배포하고 설치할 수 있어야 합니다. 만약 아래 설치 방법대로 따라해서 배포 및 설치가 되지 않을 경우 본선에 진출할 수 없습니다.**

#
## 환경 변수
>Github Repository Setting에서 Secrets and variabls의 Actions를 들어가서 아래값들을 name과 secret에 값을 넣어준다.

>PORT = 8080

>DATABASE_URL='mysql://jaemyeong:123qweasdzxc!@helper.mysql.database.azure.com:3306/helper'
>SECRET_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQSflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"

### 사전 준비 사항

> **여러분의 제품/서비스를 Microsoft 애저 클라우드에 배포하기 위해 사전에 필요한 준비 사항들을 적어주세요.**Github 계정
+ Github 계정 -> [회원가입 링크](https://github.com/)
+ Azure 구독이 있는 계정 -> [Azure 링크](azure.microsoft.com)
+ Vscode 설치 -> [VScode 다운로드 링크](https://code.visualstudio.com/download)
+ Vscode Extension Azure 설치
+ Node.js 18 LTS 설치
+ MySQL 워크벤치 설치 -> [MySQL 워크벤치 다운로드 링크](https://dev.mysql.com/downloads/workbench/)

## 시작하기
1. Azure Database for MySQL 서버에 들어갑니다.
2. 만들기를 누른 후 유연한 서버를 만들어 줍니다.
3. 자신의 리소스 그룹으로 설정을 해두고 서버 이름을 helper1로 입력을 하고 지역은 Korea Central, MySQL 버전은 8.0으로 설정합니다.
4. 워크로드 유형은 개발 또는 취미 프로젝트용으로 설정 후 인증 방법은 MySQL 인증만 으로 설정합니다.
5. 서버 관리자 로그인 인름은 jaemyeong으로 입력 후 비밀번호는 123qweasdzcx!로 설정합니다.
6. 네트워킹으로 넘어가 연결 방법을 퍼블릭 액세스(허용된 IP 주소)로 선택을 하고 검토 + 만들기를 누른 후 방화벽 규칙 없이 서버 만들기 를 눌러 유연한 서버를 만들어줍니다.
7. helper1 리소스를 눌러 들어가서 왼쪽 사이드 바에 있는 설정 안에 있는 데이터베이스를 눌러줍니다.
8. 추가 버튼을 눌러주면 오른쪽에 데이터베이스 만들기가 나옵니다.
9. 데이터베이스 만들기 안에 있는 이름 란에 원하는 이름을 영문으로 작성 후 저장 버튼을 눌러줍니다.
10. App Services에 들어가서 만들기를 눌러줍니다.
11. 웹 앱을 선택해줍니다.
12. 인스턴스 정보에서 이름은 cometo1, 게시는 코드, 런타임 스택은 Node 18 LTS, 운영체제는 리눅스, 지역은 Korea Central으로 선택한 후 배포로 넘어갑니다.
13. GitHub Actions 설정에서 지속적인 배포 사용을 선택합니다.
14. 세부정보에서 GitHub 계정 권한 부여를 해주고 조직은 hackersfround-kr로 선택 후 자신의 리포지토리로 선택 후 분기는 main으로 선택해준다.
15. 검토 + 만들기를 눌러 만들어준다

# 웹 배포
1. Azure 로그인
   구독이 없을 시 체험계정 생성
   상단 톱니바퀴 모양을 눌러 설정으로 이동
   디렉터리 이름 중에서 이전에 만든 디렉토리로 전환

2. 리소스 만들기 -> 웹 앱 만들기 -> 기본
   구독 자유롭게 선택
   -> 리소스 그룹 만들기
	   + 이름은 rg-hg(랜덤숫자조합으로)
	   + 위치는 Korean Central로 선택
   인스턴스 정보 
   + 이름 - rg-hg(랜덤숫자조합으로)
   + 게시 - 코드
   + 런타임 스택 - Node.js 18 LTS
   + 운영 체제 - linux
   + 지역 - Korea Central
   검토 + 만들기 버튼 클릭 
   만들기

3. 깃허브 로그인
   + https://github.com/hackersground-kr/cometo fork 시 copy the main brainch only 해제
   + vscode 실행
   + git clone https://github.com/{본인 깃허브 아이디}/cometo.git 터미널 창에 입력
   + cd ./cometo 로 디렉토리 변경
   + git checkout devfront 입력으로 브랜치 변경
   + git pull 로 변경사항 적용하기
   + npm i 초기 설정

4. vscode extenstion에서 azure App service 설치
   + 왼쪽 사이드바에 Azure 아이콘 생성됨
   + 그 아이콘을 통해서 vscode Azure 접속 & 로그인
   + 로그인시 Azure에서 리소스를 만든 계정으로 로그인
   + Resources 에서 해당 레포지토리가 있는 리소스에서 
     App Service 에 있는 rg-hg(랜덤숫자조합으로)을 우클릭하여
     Deploy to Web App을 선택한다.

5. 이 상태에서 vscode 상단에 Select the folder to deploy rg-hg(랜덤숫자조합으로)}을 선택하여 배포를 행한다.

   + ctrl + shift + ` 키를 눌러 터미널을 열고 OUTPUT이라 써져 있는 창을 클릭해 진행상황을 확인한다.
   + 여기서 진행중에 info There appears to be trouble with your network connection 이라는 메시지가 출력되면,
     터미널을 열고 yarn cache clean을 통해 캐시를 지운 후, yarn install을 실행해 네트워크를 복구 시킨다.
   + 이런 과정을 시행하면 네트워크 오류 메시지가 나타나지 않을 것이다.

6. Deployment to "{rg-hg(랜덤숫자조합)}" completed. 라고 메시지가 출력되면 배포가 완료되었다.


> **여러분의 제품/서비스를 Microsoft 애저 클라우드에 배포하기 위한 절차를 구체적으로 나열해 주세요.**
