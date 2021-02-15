import React from 'react';
import {BrowserRouter} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import gif from '../src/resources/CatGif.gif'

function App() {
    const home = {text: "Home"};
    const menu = [{id: 1, url: "#", text: "About me"}, {id: 2, url: "#experience",text: "Experience"}, {id: 3, url: "#projects",text: "Projects"}, {id: 4, url: "#contact",text: "Contact"}]
    const footerTitle = "Mauro Duilio Candotti";
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar home={home} menu={menu} sticky={true}/>
                <Home home={home} menu={menu}/>
                <Footer title={footerTitle}/>
            </BrowserRouter>
        </div>
    );
}

export default App;
