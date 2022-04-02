import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
//Import Rootreducer là file mình tạo ra nó là store tổng của toàn ứng dụng
import {rootReducer} from './Redux/rootReducer';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  <App />
</BrowserRouter>

  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
