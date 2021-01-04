import React, {useState} from 'react';
import Arrow from "../Arrow/Arrow";
import Slide from "../slide/Slide";
import camit from "../../resources/camit.jpg"

function Carousel(props) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const imgUrls = [camit, camit, camit, camit];

    const previousSlide = () => {
        const lastIndex = imgUrls.length - 1;
        const shouldResetIndex = currentSlide === 0;
        const index =  shouldResetIndex ? lastIndex : currentSlide - 1;

        console.log("index: ", index);
        setCurrentSlide(index);
    }

    const nextSlide = () => {
        const lastIndex = imgUrls.length - 1;
        const shouldResetIndex = currentSlide === lastIndex;
        const index =  shouldResetIndex ? 0 : currentSlide + 1;

        console.log("index: ", index);

        setCurrentSlide(index);
    }

    return (
        <div className={"carousel"} style={{height: "100%", margin: 0, width: "100%"}}>
            <Arrow direction={"left"}
                   clickFunction={previousSlide}
                   glyph={"<"}/>
            <Slide url={imgUrls[currentSlide]}/>
            <Arrow direction={"left"}
                   clickFunction={nextSlide}
                   glyph={">"}/>
        </div>
    )
};

export default Carousel;