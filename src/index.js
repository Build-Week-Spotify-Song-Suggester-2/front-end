import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import { globalReducer } from './redux/reducers'

// REDUX STATE-MANAGEMENT
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const store = createStore(globalReducer, applyMiddleware(thunk, logger))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
