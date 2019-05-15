import React from 'react';
import ReactDOM from 'react-dom';
import './styles/Style.css'; 
import App from './containers/App.js';
// import Header from './containers/Header/index';
// import TodoList from './containers/TodoList/index';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Header tagName="div"/>, document.getElementById('headerContent'));

// ReactDOM.render(<TodoList/>, document.getElementById('todoList'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
