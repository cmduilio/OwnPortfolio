import React from 'react';
import './Banner.css';
import gif from '../../resources/CatGif.gif'
import Menu from "../navbar/menu/Menu";

function Banner({home, menu}) {
    return (
        <>
            <div style={{flexDirection: "column", position: "absolute", top: "50%", left:"10%"}}>
                <Menu home={home} menu={menu} style={{display: "flex", flexDirection: "column"}}/>
            </div>
            <div id="" className={"background-container"} style={{backgroundImage: `url(${gif}`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}/>
        </>
    );
}

export default Banner;