import React from 'react';
import './Content.css';
import AnimatedBackground from "../animatedBackground/AnimatedBackground";

function Content({content}) {
    return (
        <>
            <div className={"content"}>
                {content}
            </div>
        </>
    );
}

export default Content;