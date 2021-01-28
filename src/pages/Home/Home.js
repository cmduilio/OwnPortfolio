import React from 'react';
import Slideshow from "../../components/Slideshow/Slideshow";
import camit from '../../resources/camit.jpg';
import logo from '../../resources/logo.svg';
import CardList from "../../components/CardList/CardList";
import Showcase from "../../components/Showcase/Showcase";
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
const left = {
    id: 1,
    url: logo,
    description: "un logo raro que no se, es el de react si no me equivoco",
    subtitle: "Es el logo de react",
    title: "Backend Developer",
    list: ["Java", "Node", "Python"]
};

const middle = {
    id: 2,
    url: camit,
    description: "un logo raro que no se, es el de react si no me equivoco",
    subtitle: "Es el logo de react",
    title: "Frontend Developer",
    list: []
};

const right = {
    id: 3,
    url: logo,
    description: "un logo raro que no se, es el de react si no me equivoco",
    subtitle: "Es el logo de react",
    title: "Self taught",
    list: []
};

function Home() {
    return (
        <div>
            <div id={"projects"}>
                <Showcase title={"Mercadolibre"} subtitle={"pepe"} description={"popooopopppopopopo"} url={logo}/>
                <Showcase title={"Santander Tecnología"} subtitle={"pepe"} description={"popooopopppopopopo"} url={camit}/>
                <CardList growOnHover={false} cards={images}/>
            </div>

            <Slideshow images={images}/>
        </div>
    )
}


export default Home;