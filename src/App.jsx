import { useState, useEffect } from "react";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";
import { SyncLoader } from "react-spinners";

// DONE 1. 앱이 실행되자마자 현재 위치 기반의 날씨가 보인다. (지역, 섭씨, 화씨, 날씨상태)
// DONE 2. 하단에는 5개의 도시버튼이 있다. (현재위치, 다른 도시들)
// DONE 3. 도시버튼을 누를 때마다 도시별 날씨가 보이고, 현재위치 버튼을 누르면 현재위치 날씨가 보인다.
// DONE 4. 데이터를 받아오는 동안 로딩스피너가 보인다.
// DONE 5. 도시버튼을 누르면 해당 눌렀다는 표시가 된다.

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const cities = ["Seoul", "New York", "Tokyo", "Paris"];

  useEffect(() => {
    // render 후 바로 실행되기 때문에 useState가 초기값임
    if (city === "") {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [city]);

  // 현재 위치 가져오기
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          let lat = pos.coords.latitude;
          let lon = pos.coords.longitude;
          getWeatherByCurrentLocation(lat, lon);
        },
        (error) => {
          console.error("위치 접근 거부 또는 오류 발생:", error);
          // 위치 접근 거부 시 기본 도시 날씨 표시
          setCity("Seoul");
        }
      );
    } else {
      console.error("이 브라우저에서는 위치 정보가 지원되지 않습니다.");
      setCity("Seoul");
    }
  };
  // 날씨 API data
  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b5d0dd6d13edf63a51979a9898ff13b5&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  };
  // 날씨 정보 업데이트
  const getWeatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b5d0dd6d13edf63a51979a9898ff13b5&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex justify-center align-center text-white text-center overflow-x-hidden bg-gradient-to-r from-[#6a11cb] to-[#2575fc] pt-14 pb-32">
      {loading ? (
        <div className="container">
          <SyncLoader
            color="#fff"
            loading={loading}
            size={20}
            margin={4}
            aria-label="Loading Spinner"
          />
        </div>
      ) : (
        <div className="container">
          <WeatherBox weather={weather} />
          <WeatherButton cities={cities} city={city} setCity={setCity} />
        </div>
      )}
    </div>
  );
}

export default App;
