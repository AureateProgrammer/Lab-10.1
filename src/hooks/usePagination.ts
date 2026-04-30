import {useState, useEffect} from 'react'

export const usePagination = (totalItems: number, itemsPerPage: number) => {
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = Math.ceil(totalItems / itemsPerPage)

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

    return {
        currentPage,
        totalPages, 
        goToPage,
        nextPage,
        prevPage
    }
}
