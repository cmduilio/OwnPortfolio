import React from 'react';
import Slideshow from "../Slideshow/Slideshow";
import camit from '../../resources/camit.jpg';
import logo from '../../resources/logo.svg';
import BarGraph from "../BarGraph/BarGraph";
import Login from "../Login/Login";
const images = [{url: logo}, {url: camit},{url: logo},{url: camit},{url: logo},{url: camit}];

const skills = [{label: "Camit", width: "75%"}, {label: "Saku", width: "75%"}, {label: "Florcita", width: "100%"}, {label: "PC", width: "90%"}, {label: "Calor", width: "1%"}];

const Deleteme =
        <>
            <Login/>
            <BarGraph graphs={skills}/>
            <Slideshow images={images}/>
        </>
;


export default Deleteme;