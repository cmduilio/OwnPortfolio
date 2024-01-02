import React from 'react';
import camit from '../../resources/camit.jpg';
import saku from '../../resources/saku.jpg';
import BallLightning from '../../resources/ball-lightning.mp4';
import Water from '../../resources/Water.mp4';
import Argentina from '../../resources/ArgentinaBoom.mp4';
import Fire from '../../resources/Fuego.mp4';
import Portal from '../../resources/Portal.mp4';
import Smoke from '../../resources/Smoke.mp4';
import CardList from "../../components/CardList/CardList";
import ShowcaseList from "../../components/ShowcaseList/ShowcaseList";
import santa from '../../resources/Santa.jpg';
import meli from '../../resources/melipng.png';
import sys1 from '../../resources/sysone.jpg';
import qw from '../../resources/qw.jpg';
import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";

import './Home.css';

const images = [
    {id: 1, url: saku, description: "Brave, lively and playful. Makes weird faces sleeping.", subtitle: "Calico!", title: "Saku", isVideo: false},
    {id: 2, url: camit, description: "Scaredy but very fond to me. Scared to storms (who isn't?)", subtitle: "Orange and white", title: "Camit", isVideo: false},
    ];

const vfxs = [
    {id: 1, url: BallLightning, title: "Ball Lightning", isVideo: true},
    {id: 2, url: Water, title: "Water", isVideo: true},
    {id: 3, url: Portal, title: "Portal", isVideo: true},
    {id: 4, url: Fire, title: "Simple fire", isVideo: true},
    {id: 5, url: Smoke, title: "Smoke", isVideo: true},
    {id: 6, url: Argentina, title: "Explotion", isVideo: true},
    ];

const showcaseList = [
    {
        title: "Senior Software Engineer",
        subtitle:"Santander Tecnología",
        description:"Fullstack engineer in risk department. Using React/Node + Java with springboot.",
        from:"Sep. 2020",
        to:"now",
        backgroundUrl:santa,
        url:"https://www.santander.com.ar/banco/online/select"
    },
    {
        title:"Software Engineer",
        subtitle:"Mercadolibre",
        description:"Java Engineer in Billing department. Focused on end-to-end initiatives, developing multiple REST applications and reporting tools using technologies such as: jUnit, Spark, MySQL, Guice, jxls, Pulsar, redis, Document Search, Elastic Search and many others.",
        from:"Aug. 2018",
        to:"Sep. 2020",
        backgroundUrl:meli,
        url:"http://www.mercadolibre.com.ar"
    },
    {
        title:"Software Developer",
        subtitle:"Sysone",
        description:"Java Developer in team Galicia. Maintenance of product. Technologies used: OOP, Spring Boot, JPA, Hibernate, JSF, MySQL, Oracle, JUnit, TDD, Git, SVN, Gradle, Maven, Liquibase",
        from:"Nov. 2017",
        to:"Aug. 2018",
        backgroundUrl:sys1,
        url:"http://www.sysone.com"
    },
    {
        title:"Software Developer",
        subtitle:"Quality Work",
        description:"Lead programmer making a ERP for one of the biggest drugstore in Argentina.",
        from:"Aug. 2014",
        to:"Oct. 2017",
        backgroundUrl:qw,
        url:"https://www.qwork.com.ar"
    }
];

const footerTitle = `©${new Date().getFullYear()} Mauro Duilio Candotti`;

function Home({menu, home}) {
    return (
        <div>
            <Banner title={"Mauro Candotti"} subtitle={"Systems Analyst"} menu={menu} home={home}/>
            <Navbar home={home} menu={menu} sticky={true}/>
            <section id={"about"}>
                <About title={"Hi, I'm Mauro."}
                       text={[`I'm a graduated software programmer from Argentina, currently fulltime game programmer en NIMBLE GIANT.`,
                       "In my personal time i like creating components and vfx for Unreal Engine and always eager to learn new things.",
                       `I used to work as fullstack web development using Java, Node and React in big companies such as MercadoLibre (a really big eCommerce in LATAM fighting toe to toe with Amazon).`]}/>
            </section>
            <section id={"vfx"}>
                <h2 style={{color: "var(--text-primary)"}}>
                    VFX
                </h2>
                <CardList growOnHover={true} cards={vfxs}/>
            </section>
            <section id={"projects"}>
                <h2 style={{color: "var(--text-primary)"}}>
                    Projects
                </h2>
                <p style={{color: "var(--text-primary)"}}>(WiP, sorry... but meet my 2 cats!)</p>
                <CardList growOnHover={true} cards={images}/>
            </section>
            {/*
            <section id={"experience"}>
                <h2 style={{color: "var(--text-primary)"}}>
                    Experience
                </h2>
                <ShowcaseList list={showcaseList} />
            </section>
             */}
            <div id={"contact"}>
                <Contact/>
            </div>
            <Footer title={footerTitle}/>
        </div>
    )
}


export default Home;
