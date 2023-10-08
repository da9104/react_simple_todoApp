import { useState } from 'react'
import './App.css'
import Dice from './components/Dice.jsx'
// import Die from './Die.jsx'
import LuckyN  from './components/LuckyN'

export function lessThan4(dice) {
  return sum(dice) < 4 
}
export function sum(nums) {
  return nums.reduce((prev, cur) => prev+cur, 0)
}

function allSameValue(dice) {
  console.log(dice);
  return dice.every((el) => el === dice[0]);
}



function App() {
  return (
    <>
    {/* <Dice dice={[3, 1, 6]}/>
    <Dice dice={[3, 1, 6]} color="slateblue"/>
    <Dice dice={[3, 1, 6]} color="purple"/> */}
    <LuckyN numDice={2} winCheck={lessThan4} label="Re-roll!"/>
    <LuckyN numDice={4} winCheck={allSameValue}/>
      </>
  )
}

export default App
