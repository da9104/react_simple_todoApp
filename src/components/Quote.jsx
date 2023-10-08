import { useState, useEffect } from 'react'
import axios from "axios"
const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random"

export default function Quote() {
    const [quotes, setQuotes] = useState({text: "", author: ""})

    useEffect(() => {
    //     async function fetchQuote() {
    //     const res = await fetch(RANDOM_QUOTE_URL)
    //     const jsonRes = await res.json()
    //     const randomQuote = jsonRes.quote;
    //     console.log(randomQuote)
    //     setQuotes(randomQuote)
    // }  
    // fetchQuote()
    fromQuote()
    }, []) 

    async function fromQuote() {
        const res = await axios.get(RANDOM_QUOTE_URL)
        .then((data) => data)
        .catch((err) => console.log(err))
        console.log(res.data.quote)
        setQuotes(res.data.quote)
        return res
    }

    return(
        <div>
            {/* <button> get quote</button> */}
            <h1>{quotes.text}</h1>
            <h3>{quotes.author}</h3>
        </div>
    )
}