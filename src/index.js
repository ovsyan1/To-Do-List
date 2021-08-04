import newStore from './components/redux/store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <App state={state} dispatch={newStore.dispatch.bind(newStore)} />,
  document.getElementById('root')
);
}


rerenderEntireTree(newStore.getState());
newStore.subscribe(rerenderEntireTree)


