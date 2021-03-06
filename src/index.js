import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css'
import './index.css';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './ducks/store';
import App from './App';
import { unregister } from './registerServiceWorker';

ReactDOM.render(
<Provider store={store}>
    <HashRouter>
        <App />
    </HashRouter>
</Provider>
, document.getElementById('root'));
unregister();
