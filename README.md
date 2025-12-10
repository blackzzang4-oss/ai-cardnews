# AI Card Maker

Next.js 기반 AI 카드 제작 애플리케이션

## 기술 스택

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**
- **lucide-react** (아이콘)

## 설치 방법

1. 의존성 설치:
```bash
npm install
```

2. 추가 패키지 설치 (shadcn/ui 애니메이션):
```bash
npm install tailwindcss-animate
```

3. 개발 서버 실행:
```bash
npm run dev
```

4. 브라우저에서 [http://localhost:3000](http://localhost:3000) 열기

## 프로젝트 구조

```
AI-cardnews/
├── app/
│   ├── globals.css          # 전역 스타일 및 다크 테마
│   ├── layout.tsx            # 루트 레이아웃
│   └── page.tsx              # 메인 페이지
├── components/
│   ├── Header.tsx            # 상단 헤더 (60px)
│   ├── LeftSidebar.tsx       # 좌측 설정 패널 (360px)
│   ├── Canvas.tsx            # 중앙 작업 공간
│   └── RightToolbar.tsx      # 우측 툴바 (60px)
├── lib/
│   └── utils.ts              # 유틸리티 함수
└── components.json           # shadcn/ui 설정
```

## 레이아웃 구조

- **헤더** (60px): 로고, 모델 선택, 액션 버튼
- **좌측 사이드바** (360px): 스크롤 가능한 설정 패널
- **중앙 캔버스** (flex-1): 메인 작업 공간
- **우측 툴바** (60px): 아이콘 기반 도구 모음

## 테마

짙은 다크 모드 (#0b0c15 배경)를 기본으로 하며, shadcn/ui 디자인 시스템을 따릅니다.
