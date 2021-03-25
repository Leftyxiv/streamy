import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from 'redux-thunk';

import App from "./components/App";
import reducers from "./reducers";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);


// In the next lecture we are going to be creating our history object. As of React Router DOM v4.4.0 you will get a warning in your console:

// Warning: Please use `require("history").createBrowserHistory` instead of `require("history/createBrowserHistory")`. Support for the latter will be removed in the next major release.

// To fix, our history.js file should instead look like this:

// import { createBrowserHistory } from 'history'; 
// export default createBrowserHistory();