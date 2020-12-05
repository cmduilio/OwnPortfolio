import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import './App.css';
import Navbar from "./components/navbar/Navbar";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar/>
            </BrowserRouter>
        </div>
    );
}

export default App;
