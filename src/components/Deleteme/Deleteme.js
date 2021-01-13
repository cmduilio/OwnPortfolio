import React from 'react';
import Slideshow from "../Slideshow/Slideshow";
import camit from '../../resources/camit.jpg';
import logo from '../../resources/logo.svg';
import BarGraph from "../BarGraph/BarGraph";
import CardList from "../CardList/CardList";
const images = [
    {id: 1, url: logo, description: "un logo raro que no se, es el de react si no me equivoco", subtitle: "Es el logo de react", title: "React Logo"},
    {id: 2, url: camit, description: "Es camit, es muy bonita y gatoronjosa, no mucho más", subtitle: "Naranjosa con blanquito", title: "Camit"},
    {id: 3, url: logo, description: "un logo raro que no se, es el de react si no me equivoco", subtitle: "Es el logo de react", title: "React Logo"},
    {id: 4, url: camit, description: "Es camit, es muy bonita y gatoronjosa, no mucho más", subtitle: "Naranjosa con blanquito", title: "Camit"},
    {id: 5, url: logo, description: "un logo raro que no se, es el de react si no me equivoco", subtitle: "Es el logo de react", title: "React Logo"},
    {id: 6, url: camit, description: "Es camit, es muy bonita y gatoronjosa, no mucho más", subtitle: "Naranjosa con blanquito", title: "Camit"}
    ];

const skills = [{label: "Camit", width: "75%"}, {label: "Saku", width: "75%"}, {label: "Florcita", width: "100%"}, {label: "PC", width: "90%"}, {label: "Calor", width: "1%"}];
const title = "Mis cositas";

const Deleteme =
        <>
            <CardList cards={images}/>
            <BarGraph graphs={skills} title={title}/>
            <Slideshow images={images}/>
        </>
;


export default Deleteme;