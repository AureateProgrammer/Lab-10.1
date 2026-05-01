import react from 'react'
import { useState, useEffect } from 'react'




export const DebounceSearchDemo = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm)
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm)
        }, 500)

        return () => {
            clearTimeout(handler)
        }       
    }, [searchTerm])

    const delayedSearch = (term: string) => {
        console.log('Searching for:', term)
    }
    useEffect(() => {
        if (debouncedSearchTerm) {
            delayedSearch(debouncedSearchTerm)
        }
    }, [debouncedSearchTerm])





    return (
        <div>
            <h2>Debounce Search Demo</h2>
            <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search..." />
            <p>Debounced Search Term: {debouncedSearchTerm}</p>



        </div>
    )
}
