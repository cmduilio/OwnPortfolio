import React from 'react';
import './Showcase.css';

function Showcase({title, url}) {
    return (
        <div className={"showcase"}>
            <div className={"showcase-image"} style={{backgroundImage: `url(${url}`}}/>
            <div className={"showcase-content"}>
                <div >
                    <h3 className={"showcase-title"}>
                        {title}
                        <span style={{backgroundColor: "purple",marginLeft:"0.5em", color: "white", fontSize: "0.7rem", borderRadius: "10px", verticalAlign: "middle", padding: ".25em .4em"}}>2015-2021</span>
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default Showcase;