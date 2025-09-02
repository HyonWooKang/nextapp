# Next.JS 연습 프로젝트

## 버전 및 라이브러리 정보

- React 19
- Next 15.5
- Tailwindcss
- eslint

## 학습목표

- Next.js의 사용
- App Router의 이해와 사용
- SPA로서 Next.js의 장/단점

### 장단점

1. 장점
   React와 다르게 Next.js는 브라우저에서 호출하면 html로 응답하기 때문에
   disable javascript를 클릭해도 제대로 화면을 그린다
   -> 검색엔진 최적화에 좋다

2. 단점
   만약 브라우저 속도 지연을 시키면
   일부만 변경해도 전체를 다 다시 그리기 때문에
   사용자에게는 느리게 느껴지고, 서비스 제공자는 돈이 많이 든다

이미 방문한적 있는 페이지도 다시 페이지를 다운로드 한다

-> a 태그를 Link로 변경한다
=> 마우스만 오버해도 백그라운드에서 미리 로드한다
이미 방문한적 있는 페이지는 서버 호출도 하지 않는다
==> Single Page Application
