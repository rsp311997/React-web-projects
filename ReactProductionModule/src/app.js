import React from 'react';
import ReactDOM from 'react-dom';

//scss style sheets


// Routers
//import ReservoirRouter from './routers/Reservoir-Routers.js';

// redux
//import {Provider} from 'react-redux';
//import ConfigStore from './combinereducers/CombineReducers.js';

// firebase
//import './firebase/Firebase.js';



//creating store object
//export const Store = ConfigStore();

//rendering
const jsx = (
//    <Provider store={Store}>
        <ReservoirRouter />
//    </Provider>
);

ReactDOM.render(jsx,document.getElementById('root'));
