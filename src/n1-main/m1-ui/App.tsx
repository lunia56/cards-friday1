import React from 'react';
import './App.css';
import Pages from './routes/Pages';
import Navbar from './routes/Navbar';

function App() {
    return (
        <div className="App">
            <>
                <Navbar/>
                <Pages/>
            </>
        </div>
    );
}

export default App;
