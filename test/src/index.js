import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import reducer from './Reducers';
import { Provider} from 'react-redux'
import { compose, createStore} from 'redux';


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducer, composeEnhancers)
ReactDOM.render(
// {/* <Provider> */}
<App/>
// </Provider> 
,document.querySelector('#root'));