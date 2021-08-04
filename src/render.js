import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addTxt, updateNewMessageText} from './components/redux/store';


export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <App state={state} addTxt={addTxt} updateNewMessageText={updateNewMessageText}/>,
  document.getElementById('root')
);
}