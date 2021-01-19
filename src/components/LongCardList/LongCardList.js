import React from 'react';
import './LongCardList.css';
import Pillar from "../LongCard/Pillar";

function CardList({cards}) {
    return (
        <div className={"longcards-list"}>
            {cards.map(card => {
                return(
                    <div key={card.id}>
                        <Pillar description={card.description}
                                subtitle={card.subtitle}
                                title={card.title}
                                url={card.url}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default CardList;