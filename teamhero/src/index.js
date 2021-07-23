import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { HeroContextProvider } from './store/HeroContext';
import './index.css';
import App from './App';

ReactDOM.render(
    <HeroContextProvider>
        <BrowserRouter>
                <App />
        </BrowserRouter>
    </HeroContextProvider>,
    document.getElementById('root'));
