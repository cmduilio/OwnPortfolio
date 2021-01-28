import React from 'react';
import './Showcase.css';

function Showcase({title, subtitle, description, url}) {
    return (
        <div className={"showcase"}>
            <div className={"showcase-image"} style={{backgroundImage: `url(${url}`}}/>
            <div className={"showcase-content"}>
                <div >
                    <h3 className={"showcase-title"}>
                        {title}
                        <span className={"showcase-years"} >2015-2021</span>
                    </h3>

                    <div className={"showcase-subtitle"}>{subtitle}</div>
                    <div className={"showcase-description"}>{description}</div>
                </div>
            </div>
        </div>
    )
}

export default Showcase;