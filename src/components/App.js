import React, { Component } from "react";
import "../styles/base.css";
import { Provider } from "react-redux";
import store from "../store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import dailyForecast from "./dailyForecast";
import Day from "./Day";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <h1 id="title">Seattle Weather</h1>
          </div>
          <Route exact path="/" component={dailyForecast} />
          <Route path="/5days/:id" component={Day} />
        </Router>
      </Provider>
    );
  }
}

export default App;
