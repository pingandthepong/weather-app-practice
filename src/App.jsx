import { useState, useEffect } from "react";
import "./App.css";
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";
import { SyncLoader } from "react-spinners";

// DONE 1. 앱이 실행되자마자 현재 위치 기반의 날씨가 보인다. (지역, 섭씨, 화씨, 날씨상태)
// DONE 2. 하단에는 5개의 도시버튼이 있다. (현재위치, 다른 도시들)
// DONE 3. 도시버튼을 누를 때마다 도시별 날씨가 보이고, 현재위치 버튼을 누르면 현재위치 날씨가 보인다.
// DONE 4. 데이터를 받아오는 동안 로딩스피너가 보인다.
// DONE 5. 도시버튼을 누르면 해당 눌렀다는 표시가 된다.
// DONE 6. 지역정보 받을 수 없을 때 기본 화면 "Seoul"로 지정
// DONE 7. current location이 안될때 location 정보를 받을 수 없다는  메시지

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [selectedCity, setSelectedCity] = useState(null);
  const [loading, setLoading] = useState(false);
  const cities = ["Seoul", "New York", "Tokyo", "Paris"];
  const defaultCity = "Seoul";

  // selectedCity가 변경될 때 (버튼 클릭 or 초기 진입)
  useEffect(() => {
    if (selectedCity === null) {
      getCurrentLocation();
    } else if (selectedCity === "Current") {
      getCurrentLocation();
    } else {
      setCity(selectedCity);
    }
  }, [selectedCity]);

  // city가 바뀔 때마다 날씨 정보 호출
  useEffect(() => {
    if (city) getWeatherByCity();
  }, [city]);

  // 현재 위치 가져오기
  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("이 브라우저에서는 위치 정보가 지원되지 않습니다.");
      setSelectedCity(defaultCity);
      setCity(defaultCity);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        let lat = pos.coords.latitude;
        let lon = pos.coords.longitude;
        getWeatherByCurrentLocation(lat, lon);
        setSelectedCity("Current");
      },
      (error) => {
        console.error("위치 접근 거부 또는 오류 발생:", error);
        alert(
          `위치 정보를 가져올 수 없습니다. 기본 도시(${defaultCity}) 날씨를 표시합니다.`
        );
        setSelectedCity(defaultCity);
        setCity(defaultCity);
      }
    );
  };

  // 날씨 API data
  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b5d0dd6d13edf63a51979a9898ff13b5&units=metric`;
    try {
      setLoading(true);
      let response = await fetch(url);
      let data = await response.json();
      setWeather(data);
      if (data?.name) setCity(data.name);
    } catch (err) {
      console.error(err);
      alert(
        `현재 위치의 날씨 정보를 불러오지 못했습니다. 기본 도시(${defaultCity})로 전환합니다.`
      );
      setCity(defaultCity);
    } finally {
      setLoading(false);
    }
  };
  // 날씨 정보 업데이트
  const getWeatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b5d0dd6d13edf63a51979a9898ff13b5&units=metric`;
    try {
      setLoading(true);
      let response = await fetch(url);
      let data = await response.json();
      setWeather(data);
      if (data?.name && data.name !== city) setCity(data.name);
    } catch (err) {
      console.error(err);
      alert(`도시 정보를 불러오지 못했습니다. 다시 시도해주세요.`);
    } finally {
      setLoading(false);
    }
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
          <WeatherButton
            cities={cities}
            city={city}
            setCity={setCity}
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
          />
        </div>
      )}
    </div>
  );
}

export default App;
