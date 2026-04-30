import react from 'react'
import { useState, useEffect } from 'react'




export const DebounceSearchDemo = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [debouncedTerm, setDebouncedTerm] = useState(searchTerm)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedTerm(searchTerm)
        }, 500)
        return () => {
            clearTimeout(handler)
        }
    }, [searchTerm])

    return (
        <div>
            <h2>Debounce Search Demo</h2>
            <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search..." />
            <p>Debounced Search Term: {debouncedTerm}</p>
        </div>
    )
}
