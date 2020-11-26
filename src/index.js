import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SlackContextProvider from "./context/SlackProvider";

ReactDOM.render(
  <React.StrictMode>
    <SlackContextProvider>
        <App/>
    </SlackContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);