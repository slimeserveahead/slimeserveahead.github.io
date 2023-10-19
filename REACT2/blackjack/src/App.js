import React from "react";
import allCards from './components/allCards';

import DealersHand from "./components/DealersHand";
import PlayersHand from "./components/PlayersHand";

import './App.css';

function App() {

  const [dealersCards, setDealersCards] = React.useState([])
  const [remainingCards, setRemainingCards] = React.useState(allCards)
  const [pickedCards, setPickedCards] = React.useState([])
  const [playersCards, setPlayersCards] = React.useState()
  const [playerPoints, setPlayerPoints] = React.useState(0)
  const [dealerPoints, setDealerPoints] = React.useState(0)
  const [isAlive, setIsAlive] = React.useState(false)
  const [endGame, setEndGame] = React.useState(false)
  const [win, setWin] = React.useState(false)
  const [tie, setTie] = React.useState(false)
  const [money, setMoney] = React.useState(500)
  const [bet, setBet] = React.useState(50)
  const [isEditingBet, setIsEditingBet] = React.useState(false)
  const [over, setOver] = React.useState(false)

  React.useEffect(() => {
    let dealerTotalPoints = 0

    if (dealersCards) {
      for (let i = 0; i < dealersCards.length; i++) {
        dealerTotalPoints += dealersCards[i].value
      }
    }
    setDealerPoints(dealerTotalPoints)
  }, [dealersCards])

  React.useEffect(() => {
    if (endGame) {
      if (dealerPoints > 21) {
        setWin(true)
        if (playerPoints === 21) {
          let price = 1.5 * parseInt(bet)
          setMoney(prevMoney => prevMoney + price + parseInt(bet))
          console.log("Black jack")
        } else {
          setMoney(prevMoney => prevMoney + parseInt(bet) + parseInt(bet))
          console.log("Win")
        }
      } else if (dealerPoints <= 21 && playerPoints > dealerPoints) {
        setWin(true)
        if (playerPoints === 21) {
          let price = 1.5 * parseInt(bet)
          setMoney(prevMoney => prevMoney + price + parseInt(bet))
          console.log("Black jack")
        } else {
          setMoney(prevMoney => prevMoney + parseInt(bet) + parseInt(bet))
          console.log("Win")
        }
      } else if (dealerPoints <= 21 && playerPoints < dealerPoints) {
        setWin(false)
        console.log("Lose")
      } else if (parseInt(playerPoints) === parseInt(dealerPoints)) {
        setTie(true)
        console.log("Is tie")
        setMoney(prevMoney => prevMoney + parseInt(bet))
        setWin(false)
      }
    }

  }, [endGame])

  React.useEffect(() => {
    if (playerPoints > 21) {
      setIsAlive(false)
      setWin(false)
      console.log("Out")
      setOver(true)
    }
  }, [playerPoints])

  React.useEffect(() => {
    let playerTotalPoints = 0
    
    if (playersCards) {
      for (let i = 0; i < playersCards.length; i++) {
        playerTotalPoints += playersCards[i].value
      }
    }
    
    setPlayerPoints(playerTotalPoints)
  }, [playersCards])


  function stand() {
    setIsAlive(false)

    let dealersScore = dealerPoints
    while (dealersScore < 17) {
      
      let newCard
      let sameCard
      let pickedCardsList = pickedCards
      do {
        newCard = remainingCards[Math.floor(Math.random() * remainingCards.length)]
        sameCard = pickedCardsList.filter(cards => cards.id === newCard.id)
        pickedCardsList.push(newCard)
      } while (sameCard.length > 0)
      setPickedCards(prevCards => [...prevCards, newCard])
      setDealersCards(prevCards => [...prevCards, newCard])
      setRemainingCards(remainingCards => remainingCards.filter(cards => cards.id !== newCard.id))
      dealersScore += newCard.value
    }
    if (dealersScore > 16) {
      setDealerPoints(dealersScore)
      setEndGame(true)
    }
  }

  
  function startGame() {
    console.log(money)
    if (bet > money) {
      window.alert("Insufficient funds")
    } else {
      setOver(false)
      setTie(false)
      setIsAlive(true)
      setRemainingCards(allCards)
      setEndGame(false)
      setMoney(prevMoney => prevMoney - bet)
      if (remainingCards.length > 1) {
        let firstCard = remainingCards[Math.floor(Math.random() * remainingCards.length)]

        let secondCard

        do {
          secondCard = remainingCards[Math.floor(Math.random() * remainingCards.length)]
        } while (firstCard === secondCard)

        let thirdCard
        do {
          thirdCard = remainingCards[Math.floor(Math.random() * remainingCards.length)]
        } while (thirdCard === firstCard || thirdCard === secondCard)

        setPlayersCards([firstCard, secondCard])
        setDealersCards([thirdCard])
        setPickedCards([firstCard, secondCard, thirdCard])
        setRemainingCards(remainingCards => remainingCards.filter(cards => cards.id !== firstCard.id && cards.id !== secondCard.id && cards.id !== thirdCard.id))
      }
    }
  }

  function hit() {
    if (remainingCards.length > 0) {
      let card = generateRandomCard()
      setRemainingCards(remainingCards => remainingCards.filter(cards => cards.id !== card.id))
      setPlayersCards(prevCards => [...prevCards, card])
      return card
    } else {
      window.alert("No more card")
    }
  }

  function generateRandomCard() {
    let randomNumber = Math.floor(Math.random() * remainingCards.length)
    return(remainingCards[randomNumber])
  }

  function editBet() {
    setIsEditingBet(true)
  }

  function saveBet() {
    setIsEditingBet(false)
  }

  return (
    <div className="App">
      <div className="buttons">
        <div onClick={isAlive ? hit : null} className={`button ${isAlive ? "" : "inactive"}`}>Hit</div>
        <div onClick={isAlive ? stand : null} className={`button ${isAlive ? "" : "inactive"}`}>Stand</div>
        <div onClick={isEditingBet ? null : isAlive ? null : startGame} className={`button ${isEditingBet ? "inactive" : isAlive ? "inactive" : ""}`}>Bet</div>
      </div>
      <DealersHand 
        over={over}
        isAlive={isAlive}
        dealersCards={dealersCards}
        dealerPoints={dealerPoints}
      />
      <PlayersHand 
        playerPoints={playerPoints}
        playersCards={playersCards}
      />
      {/* <div>{isAlive ? "" : tie ? "Tie" : win ? "Win" : "Lose"}</div> */}
      <div className="details">
        <div className="bet">
          {isEditingBet ? 
          <div>Bet: <input type="number" autoComplete="off" value={bet} onChange={(e) => setBet(e.target.value)}></input></div>
          : 
          <div>Bet: {bet}</div>
          }
          {isAlive ? "" :
          <div className="editButton" onClick={isEditingBet ? saveBet :editBet}>{isEditingBet ? "Save" : "Edit"}</div>
          }
        </div>
        <div>Cash: {money}</div>
      </div>
    </div>
  );
}

export default App;
