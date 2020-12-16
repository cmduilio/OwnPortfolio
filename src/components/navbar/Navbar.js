import React from 'react';
import './Navbar.css';

function Navbar({home, menu}) {
    const onClick = (e) => {
        console.log("clickeadito");
    }

    return(
            <nav className={"navbar"}>
                <ul className={"navigation"}>

                    <li className={"home"}>
                        <a href="#" className={"link"}>
                            <span className={"text"}>
                                {home.text}
                            </span>
                        </a>
                    </li>

                    {menu.map(data => {
                        return <li className={"item"} onClick={onClick}>
                            <a href="#" className={"link"}>
                                <span className={"text"}>
                                    {data.text}
                                </span>
                            </a>
                        </li>
                    })}
                </ul>
            </nav>
    );
}

export default Navbar;