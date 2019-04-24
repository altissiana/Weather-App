const initialState = {
  city: "",
  weatherData: [],
  currentTemp: "",
  currentHum: "",
  currentWeatherMain: "",
  currentWeatherDesc: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "GET_SEATTLE_DATA":
      return {
        ...state,
        city: action.city,
        weatherData: action.weatherData,
        currentTemp: action.currentTemp,
        currentHum: action.currentHum,
        currentWeatherMain: action.currentWeatherMain,
        currentWeatherDesc: action.currentWeatherDesc
      };
    default:
      return state;
  }
}
