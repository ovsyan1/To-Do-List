import store, { subscribe } from './components/redux/store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addTxt, updateNewMessageText} from './components/redux/store';


let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <App state={state} addTxt={addTxt} updateNewMessageText={updateNewMessageText}/>,
  document.getElementById('root')
);
}


rerenderEntireTree(store);
subscribe(rerenderEntireTree)


