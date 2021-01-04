import React from 'react';
import './Menu.css';
import MenuItem from "../MenuItem/MenuItem";

function Menu({home, menu, style, itemStyle}) {
    return (
        <ul className={"menu"} style={style}>
            <li key={home.text} className={"item"} style={{marginRight: "auto"}}>
                <MenuItem url={"#"} text={home.text} style={itemStyle}/>
            </li>

            {menu.map(data => {
                return (
                    <li key={data.text} className={"item"}>
                        <MenuItem style={itemStyle} url={data.url} text={data.text}/>
                    </li>
                )
            })}
        </ul>
    )
}

export default Menu;