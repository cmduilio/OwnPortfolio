import React from 'react';
import './Menu.css';
import MenuItem from "../menuItem/MenuItem";

function Menu({home, menu, style, itemStyle}) {
    return (
        <ul className={"menu"} style={style}>
            <li className={"item"} style={{marginRight: "auto"}}>
                <MenuItem url={"#"} text={home.text} style={itemStyle}/>
            </li>

            {menu.map(data => {
                return (
                    <li className={"item"}>
                        <MenuItem style={itemStyle} url={data.url} text={data.text}/>
                    </li>
                )
            })}
        </ul>
    )
}

export default Menu;