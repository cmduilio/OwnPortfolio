import React from 'react';
import "./Slide.css"

function Slide({url}) {

    const styles = {
        backgroundImage: `url(${url})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
    };

    return(
        <div className={"slide"} style={styles}>

        </div>
    )
}

export default Slide;