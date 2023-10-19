import "../styles/PlayersHand.css"

function PlayersHand(props) {


    return(
        <div className="playersHands">
            <div className="playersHandsLabel">Your Hand ({props.playerPoints})</div>
            <div className="playersCards">
                {props.playersCards && props.playersCards.map(cards => (
                    <div key={cards.id}>
                        <img src={cards.image}></img>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PlayersHand