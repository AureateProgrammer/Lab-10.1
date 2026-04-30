import react from 'react'
import { useState, useEffect } from 'react'




export const DebounceSearchDemo = () => {
    const {searchTerm, setSearchTerm} = useState('')