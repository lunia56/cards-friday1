import React from 'react';
import './App.css';
import {HashRouter} from 'react-router-dom';
import {store} from '../m2-bll/store';
import {Provider} from 'react-redux';
import Pages from './routes/Pages';
import Navbar from './routes/Navbar';

function App() {
    return (
        <div className="App">
            <HashRouter>
                <Provider store={store}>
                    <>
                        <Navbar/>
                        <Pages/>
                    </>
                </Provider>
            </HashRouter>
        </div>
    );
}

export default App;
