import React from 'react';
import './Banner.css';
import gif from '../../resources/CatGif.gif'
import Menu from "../Menu/Menu";

function Banner({home, menu, title, subtitle}) {
    const menuStyle = {display: "flex", flexDirection: "column", backgroundColor: "transparent"};
    const itemStyle = {padding: "10px"};
    return (
        <>
            <div className={"banner-title"} >
                <h1>{title}</h1>
                <div>{subtitle}</div>
            </div>
            <div className={"banner-menu"}>
                <Menu home={home} menu={menu} style={menuStyle} itemStyle={itemStyle}/>
            </div>
            <div id="" className={"background-container"} style={{backgroundImage: `url(${gif}`}}/>
        </>
    );
}

export default Banner;