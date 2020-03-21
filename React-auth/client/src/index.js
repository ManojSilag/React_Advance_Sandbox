import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { BrowserRouter, Route } from "react-router-dom";

import App from "./components/App";
import Welcome from "./components/Welcome";
import SignUp from "./components/auth/SignUp";
import reducers from "./reducers";
import Feature from "./components/Feature";
import SignOut from "./components/auth/SignOut";
import SignIn from "./components/auth/SignIn";

const store = createStore(
  reducers,
  {
    auth: { authenticated: localStorage.getItem("token") }
  },
  applyMiddleware(reduxThunk)
);

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path='/' exact component={Welcome} />
        <Route path='/Singup' exact component={SignUp} />
        <Route path='/Feature' component={Feature} />
        <Route path='/Singout' component={SignOut} />
        <Route path="/Singin" component={SignIn}/>
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
