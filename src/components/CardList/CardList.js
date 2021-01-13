import React from 'react';
import './CardList.css';
import Card from "../Card/Card";

function CardList({cards}) {
    return (
        <div className={"cards-list"}>
            {cards.map(card => {
                return(
                    <div key={card.id}>
                        <Card description={card.description}
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