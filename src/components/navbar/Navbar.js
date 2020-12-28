import React from 'react';
import './Navbar.css';
import Menu from "./menu/Menu";

function Navbar({home, menu, sticky}) {
    return(
            <nav className={"navbar"} style={sticky ? {position: "sticky"}: {}}>
                <Menu home={home} menu={menu}/>
            </nav>
    );
}

export default Navbar;