# 책갈피 서비스

## 서비스 소개

**책갈피 서비스는 책에서 인상깊은 부분을 사진으로 찍어서 업로드하고 텍스트로 저장하는 서비스입니다.**

## 서비스 시작 방법

1. git clone
2. root, root/client, root/server 디렉토리에서 `npm i` 실행
3. MySQL Database 생성
4. server root에 다음과 같은.env 파일 생성 [.evn gist link](https://gist.github.com/grasshopperbears/5f4eb20f94a6a26d911b87240f51ae79)
5. root 디렉토리에서 `npm run dev:server`, `npm run dev:client` 실행
6. localhost:8080 혹은 client 실행 결과창의 host로 접속해서 실행

## 탭별 서비스 소개

서비스는 크게 `추가하기`, `어떤 글`, `달력`, `내 책갈피`로 이루어져 있습니다

#### 1. 추가하기

![메인](https://user-images.githubusercontent.com/34625313/97107799-c3fb3a00-170c-11eb-8352-90db09483c72.png)

- 페이지 좌측에는 사진을 추가할 수 있는 form이 있습니다.

  - 사진을 추가할 경우 form 하단에 이미지 미리보기를 제공합니다.

- 사진을 업로드한 후 분석하기 버튼을 누릅니다.

  - 분석 중에는 로딩중임을 표시합니다.

- 분석이 완료된 후에는 우측 textarea에 결과를 보여줍니다.

  - 해당 결과는 수정이 가능합니다.

    ![ocr 인식 결과](https://user-images.githubusercontent.com/34625313/97107806-cc537500-170c-11eb-94bb-cc76298d6c32.png)

- 책 제목과 저자, 페이지 입력이 가능합니다.

  - 책 제목의 입력은 필수이며 나머지는 입력하지 않아도 괜찮습니다.

  - 혹은 책 제목 입력 후 검색 버튼을 눌러 읽고 있는 책을 지정할 수 있습니다. 이렇게 책을 지정할 경우 추후에 책 표지 미리보기를 제공합니다.

    ![도서 검색 결과](https://user-images.githubusercontent.com/34625313/97107810-d5dcdd00-170c-11eb-870a-19904c94c4f6.png)

- 글 수정과 책 제목 설정이 끝났다면 책갈피 추가 버튼을 클릭할 수 있습니다. 버튼을 누를 경우 책갈피가 추가됩니다.

#### 2. 어떤 글

![랜덤 화면](https://user-images.githubusercontent.com/34625313/97107818-df664500-170c-11eb-9aac-76af7435f6dd.png)

- 저장된 책갈피 중 하나를 랜덤으로 보여주는 기능입니다.
- 해당 버튼을 누를 때마다 임의의 책갈피 화면으로 전환됩니다.
- 해당 책갈피에 마우스를 올릴 경우 삭제 버튼이 나타나며 삭제가 가능합니다.

#### 3. 달력

(해당 영역은 구현되지 않았습니다.)

- 달력으로 날짜 별로 추가된 책갈피를 볼 수 있습니다.
- 한 달 전, 1년 전 추가된 책갈피 등을 소개합니다.

#### 4. 내 책갈피

![내 책갈피 메인](https://user-images.githubusercontent.com/34625313/97107825-e68d5300-170c-11eb-9785-f7c2a7b28f1f.png)

- 유저가 입력한 책갈피를 한곳으로 모아 볼 수 있는 탭입니다.

- 도서 별로 묶어서 보여줍니다.

- 최근에 추가한 화면이 상단, 좌측에 위치합니다.

- 도서를 클릭할 경우 해당 도서의 모든 책갈피를 모아서 볼 수 있습니다.

  ![도서별 모음](https://user-images.githubusercontent.com/34625313/97107827-ec833400-170c-11eb-9d6f-12179e62ac93.png)

- 도서 위에 마우스를 올릴 경우 삭제 버튼이 나타나며 삭제가 가능합니다.

- 도서 별 책갈피 화면에서도 책갈피 위에 마우스를 올릴 경우 삭제 버튼이 나타나며 삭제가 가능합니다.

## 사용한 프레임워크

| Field     | Framework                                                                                                        |
| --------- | ---------------------------------------------------------------------------------------------------------------- |
| Server    | express                                                                                                          |
| Client    | Vue, Vue Router, BootsrapVue                                                                                     |
| DB        | MySQL 5.7.31                                                                                                     |
| 상태 관리 | Vuex                                                                                                             |
| OCR 인식  | NCloud CLOVA OCR [가이드](https://docs.ncloud.com/ko/ocr/ocr-1-1.html)                                           |
| 도서 검색 | Kakao Daum 도서 검색 api [가이드](https://developers.kakao.com/docs/latest/ko/daum-search/dev-guide#search-book) |
