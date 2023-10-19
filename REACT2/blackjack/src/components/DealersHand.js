import cardBack from "../images/Cards/Card Back.webp"

function DealersHand(props) {
    return( 
        <div className="playersHands">
            <div className="playersHandsLabel">Dealer's Hand ({props.dealerPoints})</div>
            <div className="playersCards">
                {props.dealersCards && props.dealersCards.map(cards => (
                    <div key={cards.id}>
                        <img src={cards.image}></img>
                    </div>
                ))}
                {props.isAlive || props.over ? 
                <div>
                    <img src={cardBack}></img>
                </div>
                :
                ""
                }
            </div>
        </div>
    )
}

export default DealersHand