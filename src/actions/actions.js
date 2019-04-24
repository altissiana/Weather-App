import store from "../store";
import axios from "axios";

export function getSeatleData() {
  axios
    .get(
      "http://api.openweathermap.org/data/2.5/forecast?id=5809844&APPID=ff297b22c71b0557729008f4893ef6de&units=imperial"
    )
    .then(resp => {
      store.dispatch({
        type: "GET_SEATTLE_DATA",
        city: resp.data.city.name,
        weatherData: resp.data.list.map(w => w.main),
        currentTemp: resp.data.list[0].main.temp,
        currentHum: resp.data.list[0].main.humidity,
        currentWeatherMain: resp.data.list[0].weather[0].main,
        currentWeatherDesc: resp.data.list[0].weather[0].description
      });
    });
}
