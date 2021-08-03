import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addTxt} from './components/redux/store';


export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <App state={state} addTxt={addTxt}/>,
  document.getElementById('root')
);
}