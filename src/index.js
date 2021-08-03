// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import store from './components/redux/store';


// let rerenderEntireTree = (state) => {
//   ReactDOM.render(
//     <App state={state}/>,
//   document.getElementById('root')
// );
// }

// console.log(store.to_do_items);

// rerenderEntireTree(store);
// // store.subscribe(rerenderEntireTree);

// reportWebVitals();



import {rerenderEntireTree} from './render';
import store from './components/redux/store';



rerenderEntireTree(store);


