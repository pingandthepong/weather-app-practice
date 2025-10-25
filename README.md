# Weather App Practice

[배포 링크](https://pingandthepong.dothome.co.kr/weather-app-practice/)

<br>

## 📌 프로젝트 개요

> 사용자의 현재 위치 또는 선택된 도시의 날씨 정보를 실시간으로 보여주는 웹 애플리케이션

### 주요 기능

- 사용자의 위치 정보(Geolocation)를 활용한 현재 위치 기반 날씨 조회
- 도시 버튼을 통해 서울, 뉴욕, 도쿄, 파리 등의 날씨 조회
- 데이터 로딩 중 로딩 스피너 표시
- 일출·일몰 시각, 최고/최저 온도, 습도, 풍속 등의 상세 정보 제공
- 시간대(time zone)를 고려한 지역별 시각 표시

<br>

## 🛠 기술 스택

- **Frontend**: React (함수형 컴포넌트, Hooks)
- **Language**: JavaScript (ES6+)
- **API**: OpenWeatherMap API
- **Styling**: CSS3 / TailwindCSS
- **Build Tool**: Vite
- **Deployment**: Dothome Web Hosting + FileZilla

<br>

## ✅ 기능 상세

- **현재 위치 날씨 조회**: 앱 실행 시 자동으로 위치 허용 요청 → 위치 기반 날씨 표시
- **도시 선택 버튼**: “Current” 버튼 외에 지정된 도시 버튼 클릭 시 해당 도시 날씨 표시
- **로딩 상태 표시**: API 호출 중 스피너 컴포넌트로 사용자에게 로딩 인디케이터 제공
- **시간대 반영**: API에서 받은 `timezone` 값을 이용해 각 도시의 시간대에 맞춘 일출/일몰 시각 표시
- **날씨 정보 제공**: 최고/최저 온도, 습도, 풍속, 날씨 상태 등

<br>

## 📚 학습 포인트

- React Hooks (`useState`, `useEffect`) 활용
- 외부 API 호출 및 비동기 처리
- 도시별 시간대(timezone) 처리 방법
- 반응형 디자인 및 UI 상태 관리 (로딩, 에러 등)
- 배포 환경에서의 경로 설정 및 환경변수 관리
