import React from 'react';
import "./Slideshow.css";
import camit from '../../resources/camit.jpg';

function Slideshow() {

    const elementos = [0,1,2];

    return(
        <div className={"slideshow middle"}>
            <div className={"slides"}>

                {elementos.map(elem => {
                    return <input type={"radio"} name={"r"} id={"r" + elem}/>;
                })}

                <div className={"slide-navigation"}>
                    {elementos.map(elem => {
                        return <label htmlFor={"r" + elem} className={"bar"} id={"l" + elem }/>;
                    })}

                </div>

                {elementos.map(elem => {
                    return  <div className={"slide s"+elem}>
                                <img className={"image"} src={camit} alt={""}/>
                            </div>;
                })}
            </div>
        </div>
    );
}

export default Slideshow;