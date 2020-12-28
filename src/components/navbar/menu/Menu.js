import React from 'react';
import './Menu.css';
import MenuItem from "../menuItem/MenuItem";

function Menu({home, menu, style}) {
    return (
        <ul className={"menu"} style={style}>
            <li className={"item"} style={{marginRight: "auto"}}>
                <MenuItem url={"#"} text={home.text}/>
            </li>

            {menu.map(data => {
                return (
                    <li className={"item"}>
                        <MenuItem url={data.id} text={data.text}/>
                    </li>
                )
            })}
        </ul>
    )
}

export default Menu;