import { useState } from 'react'
import Dice from './Dice'

export function d6() {
    return Math.floor(Math.random() * 6) +1
}

export function getRolls(n) {
    return Array.from({length: n}, () => d6())
}

export function Button({clickFunc, label="re-roll"}) {
    return (
      <button onClick={clickFunc} className="Button">
        {label}
      </button>
    )
  }

export default function LuckyN( {numDice=2, winCheck }) {
    const [dice, setDice] = useState(getRolls(numDice))
    //const IsWinner = sum(dice) === goal;
    const IsWinner = winCheck(dice)
    const roll = () => setDice(getRolls(numDice))
    return (
        <main className="LuckyN">
            <h1>Lucky {IsWinner && "You win!"} </h1>
            <Dice dice={dice}/>
            {/* <button onClick={roll}> Re-Roll Dice </button> */}
            <Button clickFunc={roll}/>
        </main>
    )
}