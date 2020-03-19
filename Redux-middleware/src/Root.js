import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./Reducers";
// import reduxPromise from "redux-promise";
import async from "middleware/async";
import stateValidator from "middleware/stateValidator";

export default ({ children, initialState = {} }) => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(stateValidator, async))
  );
  return <Provider store={store}>{children}</Provider>;
};
