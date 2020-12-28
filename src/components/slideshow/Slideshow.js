import React, {useState} from 'react';
import "./Slideshow.css";
import Arrow from "./arrow/Arrow";

function Slideshow({images}) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const labelClicked = (index) => {
        setCurrentIndex(index);
        console.log("index ", index);
    }

    const previousSlide = () => {
        const lastindex = images.length - 1;
        const shouldresetindex = currentIndex === 0;
        const index =  shouldresetindex ? lastindex : currentIndex - 1;

        console.log("index: ", index);
        setCurrentIndex(index);
    }

    const nextSlide = () => {
        const lastindex = images.length - 1;
        const shouldresetindex = currentIndex === lastindex;
        const index =  shouldresetindex ? 0 : currentIndex + 1;

        console.log("index: ", index);

        setCurrentIndex(index);
    }

    return(
        <div className={"slideshow middle"}>
            <div className={"slide"} style={{backgroundImage: `url(${images[currentIndex].url})`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>

                <Arrow direction={"left"}
                       clickFunction={previousSlide}
                       glyph={"<"}/>
                <Arrow direction={"right"}
                       clickFunction={nextSlide}
                       glyph={">"}/>

                <div className={"slide-navigation"}>
                    {images.map((img, index) => {
                        return <label className={"bar"} onClick={() => labelClicked(index)} id={"l" + index } style={currentIndex === index ? {background: "white"} : {background: "transparent"}}/>;
                    })}
                </div>
            </div>
        </div>
    );
}

export default Slideshow;