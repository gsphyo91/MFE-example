# Micro Frontend Example

[Micro Frontend 정리자료(Notion)](https://www.notion.so/gyungsoo/Micro-Frontend-f655d1ccaa2545509b66c2ff29b858d9)

## 설명

고양이의 사진을 랜덤하게 출력하는 Cats 어플리케이션과 강아지의 사진을 랜덤하게 출력하는 Dogs 어플리케이션을 Conatiner 어플리케이션으로 통합

## 통합 방법

`Container` 어플리케이션이 초기 로드될 때, `Cats`와 `Dogs` 서버에서 제공하는 `asset-manifest.json`에서 `main.js`를 다운로드 받음

다운로드 받은 `main.js` 파일을 특정 영역에 렌더링

## 실행

### Container

`localhost:3000`

```bash
  cd container

  yarn

  yarn start
```

### Dogs

`localhost:3001`

```bash
  cd dogs

  yarn

  yarn start
```

### Cats

`localhost:3002`

```bash
  cd cats

  yarn

  yarn start
```

