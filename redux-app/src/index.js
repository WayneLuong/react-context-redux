import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import allReducers from './reducers/index'
import { Provider } from 'react-redux'
//import * as serviceWorker from './serviceWorker';

//STORE -> GLOBALIZED STATE
const store = createStore(
  allReducers,
  //Redux dev tools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

//ACTIONS -> with action.type and payloads

//REDUCER -> Localized state

//DISPATCH -> dispatch actions to reducer

ReactDOM.render(
  // Provider as parent
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
