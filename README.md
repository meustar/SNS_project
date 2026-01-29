### 📋 README.md 작성 초안


# 📱 SNS Project

Spring Boot와 Next.js로 구축된 SNS 서비스 프로젝트입니다.
백엔드와 프론트엔드가 하나의 리포지토리에서 관리되는 모노레포 구조를 따릅니다.

## 🛠 Tech Stack

- **Backend**: Java 17, Spring Boot 3.x, JPA, PostgreSQL
- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS, Shadcn UI
- **AI Tools**: Gemini CLI (Code Assist & Review)

## 📂 Project Structure

```bash
SNS_project/
├── springboot-sns/      # Backend (Spring Boot)
│   ├── src/
│   ├── .gemini/         # AI Commands (Code Review, etc.)
│   └── build.gradle.kts
├── sns-front/           # Frontend (Next.js)
│   ├── app/
│   └── package.json
└── README.md
```

## 🚀 Getting Started

프로젝트를 로컬 환경에서 실행하기 위한 가이드입니다.

### 1. Prerequisites (필수 요구사항)

* **Java**: JDK 17 이상
* **Node.js**: 18.17.0 이상 (LTS 버전 권장)
* **Database**: PostgreSQL (로컬 설치 또는 Docker 실행)

### 2. Backend Setup (Spring Boot)

데이터베이스가 실행 중이어야 합니다. `springboot-sns/src/main/resources/application.yaml` 설정을 확인하세요.

```bash
# 1. 백엔드 폴더로 이동
cd springboot-sns

# 2. 의존성 설치 및 빌드
./gradlew clean build

# 3. 애플리케이션 실행
./gradlew bootRun

```

* **Server URL**: `http://localhost:8080`
* **Note**: DB 접속 정보(`username`, `password`)는 환경 변수나 설정 파일에 맞게 수정해야 합니다.

### 3. Frontend Setup (Next.js)

백엔드 서버가 켜진 상태에서 실행하는 것을 권장합니다.

```bash
# 1. 프론트엔드 폴더로 이동
cd sns-front

# 2. 패키지 설치
npm install
# or
pnpm install

# 3. 개발 서버 실행
npm run dev

```

* **Client URL**: `http://localhost:3000`

---

## 🤖 AI Development Tools

이 프로젝트는 **Gemini CLI**를 활용한 코드 품질 관리 도구가 내장되어 있습니다.

### Code Review

작업 후 변경된 파일에 대해 AI 코드 리뷰를 수행할 수 있습니다.
(사전 설정: `.gemini` 폴더 및 Gemini CLI 설치 필요)

```bash
# 변경된 파일 자동 분석 및 리뷰 수행
/codereview
```

* **Review Rules**: Spring API 가이드라인 준수 여부, DTO Record 사용, 하드코딩 체크 등 17가지 항목 검사

