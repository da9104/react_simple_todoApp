import { Rating, TextField, Slider, Box } from "@mui/material";
import { useState } from 'react'

export default function RatingDemo() {
    const [score, setScore] = useState(3)
    const [name, setName] = useState("")
    const [volume, setVolume] = useState(50)

    const handleVolume = (e, newVal) => {
        setVolume(newVal)
    }

    const handleChange = (e) => {
        setName(e.target.value)
    }

    return (
        <div>
        <p> current rating {score}</p>
        <Rating 
        name="simple-controlled" 
        value={score}
        onChange={(event, newVal) => {
            setScore(newVal)
        }} />
        <p> you are {name}</p>

        <br/>
        <TextField
        id="outlined-basic"
        placeholder="Dami"
        label="Name"
        variant="outlined"
        value={name}
        onChange={handleChange} /> <br />
        <p> your value {volume}</p>
        <Slider 
        aria-label="Volume" 
        value={volume}
        onChange={handleVolume}
        />
        <br/>

        <Box 
         sx={{
            width:300,
            height: 300,
            backgroundColor: 'primary.dark',
            '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7]
            }
         }}   
        /> <br/>
        </div>
    )
}