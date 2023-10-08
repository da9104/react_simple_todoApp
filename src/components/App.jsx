import { useState } from 'react'
import './App.css'

export function ScoreKeeper({numPlayers= 3, target=5}) {
  const [scores, setScores] = useState(new Array(numPlayers).fill(0))
  // const incrementScore= (idx) => {
  //   setScores(prevScores => {
  //     const copy = [...prevScores]
  //     copy[idx] += 1
  //     return copy
  //   })
  // }
  const incrementScore = (idx) => {
    setScores((prevScores) => {
        return prevScores.map((score, i) => {
          if ( i === idx ) return score +1;
          return score;
        })
    })
  }
const reset = () => {
  setScores(new Array(numPlayers).fill(0))
}

  return (
    <div>
      <h1> ScoreKeeper </h1>
      <ul style={{listStyle: 'none'}}>
        {scores.map((score, idx) => {
          return (
            <li key={idx}>Player{idx +1 }: {score}
            <button onClick={() => incrementScore(idx)}>+1 Add</button>
            {score >= target && "WINNER!"}
            </li>
           )
        })}
      </ul>
      <button onClick={reset}>Reset</button>
    </div>
  )
}




function App() {
  return (
    <>
       <ScoreKeeper numPlayers={6} />
    </>
  )
}

export default App
