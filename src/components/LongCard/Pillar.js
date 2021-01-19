import React from "react";
import './Pillar.css';

function Pillar({url, title, subtitle, description, style}) {
    return (
        <div className={"longcard"} style={style}>
            <div className={"longcard-image"} style={{backgroundImage: `url(${url}`}}/>
            <div className={"longcard-title"}>{title}</div>
            <div className={"longcard-subtitle"}>{subtitle}</div>
            <div className={"longcard-description"}>{description}</div>
        </div>
    )
}

export default Pillar;