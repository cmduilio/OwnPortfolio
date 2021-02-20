import React from 'react';
import Slideshow from "../../components/Slideshow/Slideshow";
import camit from '../../resources/camit.jpg';
import logo from '../../resources/logo.svg';
import CardList from "../../components/CardList/CardList";
import ShowcaseList from "../../components/ShowcaseList/ShowcaseList";
import santa from '../../resources/Santa.jpg';
import meli from '../../resources/melipng.png';
import sys1 from '../../resources/sysone.jpg';
import qw from '../../resources/qw.jpg';
import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const images = [
    {id: 1, url: logo, description: "un logo raro que no se, es el de react si no me equivoco", subtitle: "Es el logo de react", title: "React Logo"},
    {id: 2, url: camit, description: "Es camit, es muy bonita y gatoronjosa, no mucho más", subtitle: "Naranjosa con blanquito", title: "Camit"},
    {id: 3, url: logo, description: "un logo raro que no se, es el de react si no me equivoco", subtitle: "Es el logo de react", title: "React Logo"},
    {id: 4, url: camit, description: "Es camit, es muy bonita y gatoronjosa, no mucho más", subtitle: "Naranjosa con blanquito", title: "Camit"},
    {id: 5, url: logo, description: "un logo raro que no se, es el de react si no me equivoco", subtitle: "Es el logo de react", title: "React Logo"},
    {id: 6, url: camit, description: "Es camit, es muy bonita y gatoronjosa, no mucho más", subtitle: "Naranjosa con blanquito", title: "Camit"}
    ];

const showcaseList = [
    {
        title: "Senior Software Engineer",
        subtitle:"Santander Tecnología",
        description:"Java Engineer in Billing department. We focus on end-to-end initiatives, developing multiple REST applications (for accounting, taxes, billing,credit policies and many others) and reporting tools using technologies such as: jUnit, Spark, MySQL, Guice, jxls, AWS, GCP, Pulsar, redis, maven, gradle, git, Document Search, Elastic Search and others.",
        from:"Sep. 2020",
        to:"now",
        backgroundUrl:santa,
        url:"https://www.santander.com.ar/banco/online/select"
    },
    {
        title:"Software Engineer",
        subtitle:"Mercadolibre",
        description:"Java Engineer in Billing department. Focused on end-to-end initiatives, developing multiple REST applications (for accounting, billing,credit policies and many others) and reporting tools using technologies such as: jUnit, Spark, MySQL, Guice, jxls, AWS, GCP, Pulsar, redis, maven, gradle, git, Document Search, Elastic Search and others.",
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

const footerTitle = "Mauro Duilio Candotti";

function Home({menu, home}) {
    return (
        <div>
            <Banner title={"Mauro Candotti"} subtitle={"Software Developer"} menu={menu} home={home}/>
            <Navbar home={home} menu={menu} sticky={true}/>
            <div id={"projects"}>
                <CardList growOnHover={true} cards={images}/>
            </div>
            <div id={"experience"}>
                <h2 style={{color: "var(--text-primary)"}}>Experience</h2>
                <ShowcaseList list={showcaseList} />
            </div>
            {/*<Slideshow images={images}/>*/}
            <Footer title={footerTitle}/>
        </div>
    )
}


export default Home;