import React from 'react';
import './Content.css';

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