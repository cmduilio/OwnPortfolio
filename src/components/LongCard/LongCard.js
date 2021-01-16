import React from "react";
import './LongCard.css';

function LongCard({url, title, subtitle, description}) {
    return (
        <div className={"longcard"}>
            <div className={"longcard-image"} style={{backgroundImage: `url(${url}`}}/>
            <div className={"longcard-title"}>{title}</div>
            <div className={"longcard-subtitle"}>{subtitle}</div>
            <div className={"longcard-description"}>{description}</div>
        </div>
    )
}

export default LongCard;