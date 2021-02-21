import React from 'react';
import './Footer.css';

function Footer({title}) {
    return (
        <div className={"footer"}>
            <h3 className={"footer-title"}>
                {title}
            </h3>
        </div>
    )
}

export default Footer;