import React, {useRef} from 'react';
import './Navbar.css';
import Menu from "../Menu/Menu";

function Navbar({home, menu, sticky}) {
    const checkRef = useRef(null);

    return(
        <div className={"navbar"} onBlur={() => {
            console.log("pepe");
        }}
             style={sticky ? {position: "sticky"}: {}}>
            <label htmlFor={"toogle"} className={"hamburguer item"}>
                &#9776;
            </label>
            <input type={"checkbox"} id={"toogle"} ref={checkRef}/>
            <Menu home={home} menu={menu} onClick={() => {
                checkRef.current.checked = false;
            }}/>
        </div>
    );
}

export default Navbar;