import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HeroContextProvider } from './store/HeroContext';
import { UserContextProvider } from './store/UserContext';
import './index.css';
import App from './App';

ReactDOM.render(
    <HeroContextProvider>
        <BrowserRouter>
            <UserContextProvider>
                <App />
            </UserContextProvider>
        </BrowserRouter>
    </HeroContextProvider>,
    document.getElementById('root'));
