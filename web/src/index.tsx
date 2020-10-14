import React from 'react';
import ReactDOM from 'react-dom';

import 'leaflet/dist/leaflet.css';

import GlobalStyles from './styles/Global';

import Routes from './routes';

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyles />
        <Routes />
    </React.StrictMode>,
    document.getElementById('root')
);
