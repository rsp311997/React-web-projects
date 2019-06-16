/* Import React Preset Components*/
import React from 'react';
import ReactDOM from 'react-dom';

/* Import Custome Component*/
import IndecisionApp from './components/IndecisionApp.js'

/* Getting the element having id "root" in index.html*/
var approot = document.getElementById('root');

/* Rendering IndecisionApp in index.html at approot element using "root" id*/
ReactDOM.render(<IndecisionApp />,approot);
