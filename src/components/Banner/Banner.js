import React from 'react';
import './Banner.css';
import gif from '../../resources/CatGif.gif'
import Menu from "../Menu/Menu";

function Banner({home, menu}) {
    return (
        <>
            <h1 style={{position: "absolute", width: "100%", textAlign:"center", top: "10%", color: "var(--text-primary)", textShadow: "0 0 10px var(--bg-secondary)"}}>
                Plaza de Mascotas
            </h1>
            <div style={{flexDirection: "column", position: "absolute", top: "50%", left:"10%", transform: "translateY(-50%)"}}>
                <Menu home={home} menu={menu} style={{display: "flex", flexDirection: "column"}} itemStyle={{padding: "10px", color: "var(--text-dark)"}}/>
            </div>
            <div id="" className={"background-container"} style={{backgroundImage: `url(${gif}`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}/>
        </>
    );
}

export default Banner;