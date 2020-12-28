import React from 'react';
import {BrowserRouter} from "react-router-dom";
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Content from "./components/content/Content";
import Deleteme from "./components/deleteme/Deleteme";
import Banner from "./components/banner/Banner";

function App() {
    const home = {text: "Home"};
    const menu = [{text: "Adopt"}, {text: "About Us"}, {text: "Help"}]
    return (
        <div className="App">
            <BrowserRouter>
                <Banner home={home} menu={menu}/>
                <Navbar home={home} menu={menu} sticky={true}/>
                <Content content={Deleteme}/>
            </BrowserRouter>
        </div>
    );
}

export default App;
