import React from 'react';
import './Footer.css';

function Footer({title}) {
    return (
        <div className={"footer"}>
            <div className={"footer-title"}>
                {title}
            </div>
        </div>
    )
}

export default Footer;