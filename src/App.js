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
    return (
        <div className="App">
            <BrowserRouter>
                <Banner home={home} menu={menu}/>
                <Navbar home={home} menu={menu} sticky={true}/>
                <Content content={Deleteme}/>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
