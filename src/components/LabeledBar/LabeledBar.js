import React from "react";
import './LabeledBar.css';
import Bar from "../Bar/Bar";

function LabeledBar({label, width}) {

    return (
        <div className={"box"} style={{display: "flex", alignItems: "center", textAlign: "left", padding: "10px", height: "4rem"}}>
            <label className={"bar-label"}>{label}</label>
            <Bar width={width}/>
        </div>
    )
}

export default LabeledBar;