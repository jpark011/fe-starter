# 카카오커머스 엘리베이터 SPA
카카오커머스 프론트엔드 개발자 과제1: 화물 엘리베이터


## Directories

```
    ./
    ├── src/                                # source directory
        ├── components/                     # components directory
            ├── *.html|css|ts|spec.ts       # component files
        ├── index.html                      # index file
        ├── main.ts                         # entry point
        ├── style.css                       # global styles
        ├── ...
    ├── karma.conf.js
    ├── package.json
    ├── webpack.config.js
    ├── tsconfig.json
    └── README.md
```


## Prerequisites
- Node.js (`^12.18.3`)


## Installation
```
npm install
```


## Usage


### Build app
```
npm run build
```

### Run app (deployed on [localhost:8080](localhost:8080))
```
# (with hot reloading)
npm start
# or (without hot reloading)
npm run server
```

### Run test (Karma)
```
npm test
```



## API
```javascript
// 층(floor)을 입력받아 층의 버튼이 활성화 되는 메서드
// floor: Number (2 <= floor <=5)
// returns void
window.enableButton(floor)

// 층을 입력 받아 층의 버튼이 활성화 되었는지 여부를 반환하는 메서드
// floor: Number (2 <= floor <=5)
// returns Boolean
window.isButtonEnabled(floor)
```



## 컴포넌트 설명
```html
// root level 컴포넌트 
// 어플 부트스트랩
<kakao-app-elevator></kakao-app-elevator>

// 엘리베이터 컨테이너 컴포넌트
// 엘리베이터 갯수 조절 및 스케쥴러
<kakao-elevator-buttons></kakao-elevator-buttons>

// 버튼 컨테이너 컴포넌트
// 버튼 갯수 조절 및 이벤트 디스패처
<kakao-elevator-cells></kakao-elevator-cells>
```



## 엘리베이터/층 수 조절

```html
<kakao-app-elevator>
	<kakao-elevator-buttons floors="5"></kakao-elevator-buttons>
	<kakao-elevator-cells elevators="2"></kakao-elevator-cells>
</kakao-app-elevator>
```

`floors` - 층 수 조절 (2층 - 5층)

`elevators` - 엘리베이터 수 조절 (2기 - 4기)


## Contributors

- 박현재 (wngt3319@gmail.com)