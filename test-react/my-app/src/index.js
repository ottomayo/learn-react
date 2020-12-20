import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 10;
canvas.height = 10;

ctx.beginPath();
ctx.rect(0, 0, 10, 10);
ctx.fillStyle = 'white';
ctx.fill();
ctx.closePath();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
