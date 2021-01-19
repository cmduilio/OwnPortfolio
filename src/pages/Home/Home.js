import React from 'react';
import Slideshow from "../../components/Slideshow/Slideshow";
import camit from '../../resources/camit.jpg';
import logo from '../../resources/logo.svg';
import BarGraph from "../../components/BarGraph/BarGraph";
import CardList from "../../components/CardList/CardList";
import LongCardList from "../../components/LongCardList/LongCardList";
import ThreePillars from "../../components/ThreePillars/ThreePillars";
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

function Home() {
    return (
        <div>
            <div id={"projects"}>
                {/*<LongCardList cards={images}/>*/}
                <ThreePillars left={{id: 1, url: logo, description: "un logo raro que no se, es el de react si no me equivoco", subtitle: "Es el logo de react", title: "React Logo"}} middle={{id: 1, url: logo, description: "un logo raro que no se, es el de react si no me equivoco", subtitle: "Es el logo de react", title: "React Logo"}} right={{id: 1, url: logo, description: "un logo raro que no se, es el de react si no me equivoco", subtitle: "Es el logo de react", title: "React Logo"}}/>
                <CardList growOnHover={false} cards={images}/>
            </div>

            <Slideshow images={images}/>
        </div>
    )
}


export default Home;