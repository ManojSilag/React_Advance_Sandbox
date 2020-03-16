import React from "react";
import ReactDOM from "react-dom";
import App from "components/App";
import Root from 'Root';
import { Route, BrowserRouter } from "react-router-dom";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducers, {});

ReactDOM.render(
  <Root>
    <BrowserRouter>
    <Route path="/" component={App}/>
    </BrowserRouter>
  </Root>,
  document.querySelector("#root")
);
