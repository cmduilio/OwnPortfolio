import React from "react";
import './Card.css';

function Card({url, title, subtitle, description}) {
    return (
        <div className={"card"}>
            <div className={"card-image"} style={{backgroundImage: `url(${url}`}}/>
            <div className={"card-title"}>{title}</div>
            <div className={"card-subtitle"}>{subtitle}</div>
            <div className={"card-description"}>{description}</div>
        </div>
    )
}

export default Card;