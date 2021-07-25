import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HeroContextProvider } from './store/HeroContext';
import { UserContextProvider } from './store/UserContext';
import './index.css';
import Router from './Router';

ReactDOM.render(
    <HeroContextProvider>
        <BrowserRouter>
            <UserContextProvider>
                <Router />
            </UserContextProvider>
        </BrowserRouter>
    </HeroContextProvider>,
    document.getElementById('root'));
