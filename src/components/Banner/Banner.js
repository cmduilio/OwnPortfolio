import React from 'react';
import './Banner.css';
import Menu from "../Menu/Menu";

function Banner({home, menu, title, subtitle, image}) {
    const menuStyle = {display: "flex", flexDirection: "column", backgroundColor: "transparent"};
    const itemStyle = {padding: "10px"};
    return (
        <>
            <div className={"banner-title-box"} >
                <div className={"lightbar"}/>
                <div className={"toplayer"}/>
                <h1 className={"banner-title"}>{title}</h1>
                <p className={"banner-title"}>{subtitle}</p>
            </div>
            <div className={"banner-menu"}>
                {!menu ? <></> : <Menu home={home} menu={menu} style={menuStyle} itemStyle={itemStyle}/>}
            </div>
            <div id="" className={"background-container"} style={{backgroundImage: `url(${image}`}}/>
        </>
    );
}

export default Banner;