import newStore from './components/redux/store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <App state={state} addTxt={newStore.addTxt.bind(newStore)} updateNewMessageText={newStore.updateNewMessageText.bind(newStore)}/>,
  document.getElementById('root')
);
}


rerenderEntireTree(newStore.getState());
newStore.subscribe(rerenderEntireTree)


