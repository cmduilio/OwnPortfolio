import React from 'react';
import './MenuItem.css';

function MenuItem({url, text}) {
    return (
        <a href={url} className={"link"}>
            <span className={"text"}>
                {text}
            </span>
        </a>
    )
}

export default MenuItem;