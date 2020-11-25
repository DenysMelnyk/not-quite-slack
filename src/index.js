import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {users, channels} from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <App
        users={users}
        channels={channels}
    />
  </React.StrictMode>,
  document.getElementById('root')
);