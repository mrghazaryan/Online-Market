import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';
import store from './store';
import {BrowserRouter as Router} from 'react-router-dom';
import "./assets/styles/style.css"
import "./assets/styles/shop.css"
import "./assets/styles/bag.css"
import "./assets/styles/product-add.css"
import "./assets/styles/sign-in.css"
import "./assets/styles/sign-up.css"


ReactDom.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
);