import React from 'react';
import './BarGraph.css'
import LabeledBar from "../LabeledBar/LabeledBar";

function BarGraph({graphs}) {
    return (
            <div style={{margin:"auto", width:"75%"}}>
                <label className={"graph-title"}>My amor por las cosas que tengo</label>
                {graphs.map(graph => {
                    return <LabeledBar key={graph.label} label={graph.label} width={graph.width}/>
                })}
            </div>
    )
}

export default BarGraph;
