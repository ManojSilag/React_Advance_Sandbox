import React from "react";
import ReactDOM from "react-dom";
import App from "components/App";
import Root from 'Root';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducers, {});

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.querySelector("#root")
);
