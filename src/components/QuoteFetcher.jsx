import { useState, useEffect } from 'react'
import axios from "axios"
const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random"

export default function QuoteFetcher() {
    const [quotes, setQuotes] = useState({text: "", author: ""})
    const [isLoading, setIsLoading ] = useState(true)

    useEffect(() => {
        async function fetchQuote() {
        const res = await fetch(RANDOM_QUOTE_URL)
        const jsonRes = await res.json()
        const randomQuote = jsonRes.quote;
      //  console.log(randomQuote)
        setQuotes(randomQuote)
        setIsLoading(false)
    }  
    fetchQuote()
    }, []) 

    return(
        <div>
            <p className='Loader' style={{ opacity: isLoading? 1 : 0 }}> Loading... </p>
            <h1>{quotes.text}</h1>
            <h3>{ isLoading? "" : <p> - </p> }{quotes.author}</h3>
        </div>
    )
}