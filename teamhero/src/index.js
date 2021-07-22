import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { HeroContextProvider } from './store/HeroContext';
import './index.css';
import App from './App';

ReactDOM.render(
    <BrowserRouter>
        <HeroContextProvider>
            <App />
        </HeroContextProvider>
    </BrowserRouter>,
    document.getElementById('root'));
