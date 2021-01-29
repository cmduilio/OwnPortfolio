import React from "react";
import './ShowcaseList.css';
import Showcase from "../Showcase/Showcase";

function ShowcaseList({list}) {
    return (
        <div>
            <h2 style={{color: "var(--text-primary)"}}>Experience</h2>
            {list.map(elem => {
                return(
                    <div key={elem.title}>
                        <Showcase title={elem.title} subtitle={elem.subtitle}
                                  description={elem.description} from={elem.from}
                                  to={elem.to} backgroundUrl={elem.backgroundUrl}
                                  url={elem.url}/>
                    </div>
                )
            })}
        </div>
    )
}

export default ShowcaseList;