import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import tasks from './reducers';


let store = createStore(tasks, applyMiddleware(thunk));

ReactDOM.render(
  
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);

