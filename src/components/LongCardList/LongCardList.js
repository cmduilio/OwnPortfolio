import React from 'react';
import './LongCardList.css';
import LongCard from "../LongCard/LongCard";

function CardList({cards}) {
    return (
        <div className={"longcards-list"}>
            {cards.map(card => {
                return(
                    <div key={card.id}>
                        <LongCard description={card.description}
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