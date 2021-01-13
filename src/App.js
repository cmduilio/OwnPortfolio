import React from 'react';
import {BrowserRouter} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import Deleteme from "./components/Deleteme/Deleteme";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";

function App() {
    const home = {text: "Home"};
    const menu = [{id: 1, url: "#", text: "Adopt"}, {id: 2, url: "#",text: "About Us"}, {id: 2, url: "#",text: "Help"}]
    const title = "asd";
    const subtitle = "pepepe";
    const footerTitle = "Mauro Duilio Candotti";
    return (
        <div className="App">
            <BrowserRouter>
                <Banner home={home} menu={menu} title={title} subtitle={subtitle}/>
                <Navbar home={home} menu={menu} sticky={true}/>
                <Content content={Deleteme}/>
                <Footer title={footerTitle}/>
            </BrowserRouter>
        </div>
    );
}

export default App;
