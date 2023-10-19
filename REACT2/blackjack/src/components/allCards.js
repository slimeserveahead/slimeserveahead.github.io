import SpadeAce from "../images/Cards/Ace Spade.webp"
import SpadeTwo from "../images/Cards/Spade 2.webp"
import SpadeThree from "../images/Cards/Spade 3.webp"
import SpadeFour from "../images/Cards/Spade 4.webp"
import SpadeFive from "../images/Cards/Spade 5.webp"
import SpadeSix from "../images/Cards/Spade 6.webp"
import SpadeSeven from "../images/Cards/Spade 7.webp"
import SpadeEight from "../images/Cards/Spade 8.webp"
import SpadeNine from "../images/Cards/Spade 9.webp"
import SpadeTen from "../images/Cards/Spade 10.webp"
import SpadeJack from "../images/Cards/New Jack of Spades.webp"
import SpadeQueen from "../images/Cards/New Queen of Spades.webp"
import SpadeKing from "../images/Cards/New King of Spades.webp"

import HeartAce from "../images/Cards/Ace Heart.webp"
import HeartTwo from "../images/Cards/Heart 2.webp"
import HeartThree from "../images/Cards/Heart 3.webp"
import HeartFour from "../images/Cards/Heart 4.webp"
import HeartFive from "../images/Cards/Heart 5.webp"
import HeartSix from "../images/Cards/Heart 6.webp"
import HeartSeven from "../images/Cards/Heart 7.webp"
import HeartEight from "../images/Cards/Heart 8.webp"
import HeartNine from "../images/Cards/Heart 9.webp"
import HeartTen from "../images/Cards/Heart 10.webp"
import HeartJack from "../images/Cards/New Jack of Hearts.webp"
import HeartQueen from "../images/Cards/New Queen of Hearts.webp"
import HeartKing from "../images/Cards/New King of Hearts.webp"

import DiamondAce from "../images/Cards/Ace Diamond.webp"
import DiamondTwo from "../images/Cards/Diamond 2.webp"
import DiamondThree from "../images/Cards/Diamond 3.webp"
import DiamondFour from "../images/Cards/Diamond 4.webp"
import DiamondFive from "../images/Cards/Diamond 5.webp"
import DiamondSix from "../images/Cards/Diamond 6.webp"
import DiamondSeven from "../images/Cards/Diamond 7.webp"
import DiamondEight from "../images/Cards/Diamond 8.webp"
import DiamondNine from "../images/Cards/Diamond 9.webp"
import DiamondTen from "../images/Cards/Diamond 10.webp"
import DiamondJack from "../images/Cards/New Jack of Diamonds.webp"
import DiamondQueen from "../images/Cards/New Queen of Diamonds.webp"
import DiamondKing from "../images/Cards/New King of Diamonds.webp"

import ClubAce from "../images/Cards/Ace Clubs.webp"
import ClubTwo from "../images/Cards/Clubs 2.webp"
import ClubThree from "../images/Cards/Clubs 3.webp"
import ClubFour from "../images/Cards/Clubs 4.webp"
import ClubFive from "../images/Cards/Clubs 5.webp"
import ClubSix from "../images/Cards/Clubs 6.webp"
import ClubSeven from "../images/Cards/Clubs 7.webp"
import ClubEight from "../images/Cards/Clubs 8.webp"
import ClubNine from "../images/Cards/Clubs 9.webp"
import ClubTen from "../images/Cards/Clubs 10.webp"
import ClubJack from "../images/Cards/New Jack of Clubs.webp"
import ClubQueen from "../images/Cards/New Queen of Clubs.webp"
import ClubKing from "../images/Cards/New King of Clubs.webp"

const allCards = [
    { id: 1, name: "Spade Ace", value: 11, image: SpadeAce },
    { id: 2, name: "Spade Two", value: 2, image: SpadeTwo },
    { id: 3, name: "Spade Three", value: 3, image: SpadeThree },
    { id: 4, name: "Spade Four", value: 4, image: SpadeFour },
    { id: 5, name: "Spade Five", value: 5, image: SpadeFive },
    { id: 6, name: "Spade Six", value: 6, image: SpadeSix },
    { id: 7, name: "Spade Seven", value: 7, image: SpadeSeven },
    { id: 8, name: "Spade Eight", value: 8, image: SpadeEight },
    { id: 9, name: "Spade Nine", value: 9, image: SpadeNine },
    { id: 10, name: "Spade Ten", value: 10, image: SpadeTen },
    { id: 11, name: "Spade Jack", value: 10, image: SpadeJack },
    { id: 12, name: "Spade Queen", value: 10, image: SpadeQueen },
    { id: 13, name: "Spade King", value: 10, image: SpadeKing },

    { id: 14, name: "Heart Ace", value: 11, image: HeartAce },
    { id: 15, name: "Heart Two", value: 2, image: HeartTwo },
    { id: 16, name: "Heart Three", value: 3, image: HeartThree },
    { id: 17, name: "Heart Four", value: 4, image: HeartFour },
    { id: 18, name: "Heart Five", value: 5, image: HeartFive },
    { id: 19, name: "Heart Six", value: 6, image: HeartSix },
    { id: 20, name: "Heart Seven", value: 7, image: HeartSeven },
    { id: 21, name: "Heart Eight", value: 8, image: HeartEight },
    { id: 22, name: "Heart Nine", value: 9, image: HeartNine },
    { id: 23, name: "Heart Ten", value: 10, image: HeartTen },
    { id: 24, name: "Heart Jack", value: 10, image: HeartJack },
    { id: 25, name: "Heart Queen", value: 10, image: HeartQueen },
    { id: 26, name: "Heart King", value: 10, image: HeartKing },

    { id: 27, name: "Diamond Ace", value: 11, image: DiamondAce },
    { id: 28, name: "Diamond Two", value: 2, image: DiamondTwo },
    { id: 29, name: "Diamond Three", value: 3, image: DiamondThree },
    { id: 30, name: "Diamond Four", value: 4, image: DiamondFour },
    { id: 31, name: "Diamond Five", value: 5, image: DiamondFive },
    { id: 32, name: "Diamond Six", value: 6, image: DiamondSix },
    { id: 33, name: "Diamond Seven", value: 7, image: DiamondSeven },
    { id: 34, name: "Diamond Eight", value: 8, image: DiamondEight },
    { id: 35, name: "Diamond Nine", value: 9, image: DiamondNine },
    { id: 36, name: "Diamond Ten", value: 10, image: DiamondTen },
    { id: 37, name: "Diamond Jack", value: 10, image: DiamondJack },
    { id: 38, name: "Diamond Queen", value: 10, image: DiamondQueen},
    { id: 39, name: "Diamond King", value: 10, image: DiamondKing },

    { id: 40, name: "Club Ace", value: 11, image: ClubAce },
    { id: 41, name: "Club Two", value: 2, image: ClubTwo },
    { id: 42, name: "Club Three", value: 3, image: ClubThree },
    { id: 43, name: "Club Four", value: 4, image: ClubFour },
    { id: 44, name: "Club Five", value: 5, image: ClubFive },
    { id: 45, name: "Club Six", value: 6, image: ClubSix },
    { id: 46, name: "Club Seven", value: 7, image: ClubSeven },
    { id: 47, name: "Club Eight", value: 8, image: ClubEight },
    { id: 48, name: "Club Nine", value: 9, image: ClubNine },
    { id: 49, name: "Club Ten", value: 10, image: ClubTen },
    { id: 50, name: "Club Jack", value: 10, image: ClubJack },
    { id: 51, name: "Club Queen", value: 10, image: ClubQueen },
    { id: 52, name: "Club King", value: 10, image: ClubKing },
]

export default allCards