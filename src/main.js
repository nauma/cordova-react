import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

document.addEventListener("deviceready", function() {
  ReactDOM.render(<App />, document.getElementById('app'));
}, false);