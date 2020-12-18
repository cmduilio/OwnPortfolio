import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Content from "./components/content/Content";
import Deleteme from "./components/deleteme/Deleteme";
import AnimatedBackground from "./components/animatedBackground/AnimatedBackground";

function App() {
    const home = {text: "Home"};
    const menu = [{text: "Adopt"}, {text: "About Us"}, {text: "Help"}]
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar home={home} menu={menu}/>
                <Content content={Deleteme}/>
            </BrowserRouter>
        </div>
    );
}

export default App;
