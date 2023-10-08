import { useState } from 'react'
import Box from './Box'

export default function BoxGrid({numBox=6}) {
    const [boxes, setBoxes] = useState(Array(numBox).fill(0))
    // const [boxes, setBoxes] = useState([
    //     false, false, false, false
    // ])
    const reset = () => {
        setBoxes(Array.from({ length: numBox }))
    }

    const toggleBox = (idx) => {
       setBoxes(oldBoxes => {
       return oldBoxes.map((value, i) => {
            if (i === idx) {
                return !value
            } else {
                return value
            }
         })
       })
    }
    return (
        <div className="BoxGrid">
       {boxes.map((idx, b) => (
            <Box key={idx} isActive={b} toggle={() => toggleBox(idx)}/>
        ))}
       <br/>
       <button onClick={reset}>reset</button>
        </div>
    )
}