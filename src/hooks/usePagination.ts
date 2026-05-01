import {useState, useEffect} from 'react'

export const usePagination = (totalItems: number, itemsPerPage: number) => {
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = Math.ceil(totalItems / itemsPerPage)

    const initialPage = () => {
        if (currentPage > 1) {
            setCurrentPage(1)
        } else if (currentPage > totalPages) {
            setCurrentPage(totalPages)
        }
    }
    
    const goToPage = (page: number) => {
        if (page < 1) {
            setCurrentPage(1)
        } else if (page > totalPages) {
            setCurrentPage(totalPages)
        } else {
            setCurrentPage(page)
        }
    }

    const nextPage = () => {
        goToPage(currentPage + 1)
    }

    const prevPage = () => {
        goToPage(currentPage - 1)
    }

    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(totalPages)
        }
    }, [totalItems, itemsPerPage, totalPages, currentPage])

    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems)
    const currentItems = Array.from({ length: endIndex - startIndex }, (_, i) => startIndex + i + 1)



    return {
        startIndex,
        endIndex,
        currentItems,
        initialPage,
        currentPage,
        totalPages, 
        goToPage,
        nextPage,
        prevPage,   
        totalItems,
        itemsPerPage

    }
}
