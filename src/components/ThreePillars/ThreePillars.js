import React from 'react';
import './ThreePillars.css';
import Pillar from "../LongCard/Pillar";

function ThreePillars({left, middle, right}) {
    return (
        <div style={{display: "flex", direction: "column", justifyContent: "center"}}>
            <Pillar title={left.title} url={left.url} style={{borderRadius: "10px 0px 0px 10px"}}/>
            <Pillar title={middle.title} url={middle.url} style={{borderRadius: "0px 0px 0px 0px"}}/>
            <Pillar title={right.title} url={right.url} style={{borderRadius: "0px 10px 10px 0px"}}/>
        </div>
    )
}

export default ThreePillars;