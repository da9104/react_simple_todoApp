import { useState } from 'react'
import Button from '@mui/material/Button';

export default function SearchForm({ search }) {
    const [term, setTerm] = useState('')

    function handleChange(event) {
        setTerm(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        search(term)
        setTerm("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={term} onChange={handleChange} type='text' />
            <Button variant="contained">Search</Button>
        </form>
    )
}