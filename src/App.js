import React from 'react';
import AppRouter from './routers/AppRouter';
import { Provider } from "react-redux";

import './App.css';
import { store } from './store';

export default function App() {
    return (
        <Provider store={ store }>
            <AppRouter/>
        </Provider>
    )
}
