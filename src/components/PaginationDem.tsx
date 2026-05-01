import {usePagination } from '../hooks/usePagination'

const PaginationDem = () => {
    const {currentPage, totalPages, goToPage, nextPage, prevPage, initialPage} = usePagination(100, 10)
    return (
        <div>
            <h2>Pagination Demo</h2>
            <p>Current Page: {currentPage} / {totalPages}</p>
            <button onClick={initialPage}>First</button>
            <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
            <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
            <input type="number" value={currentPage} onChange={(e) => goToPage(Number(e.target.value))} min={1} max={totalPages} />
            <p>Items Per Page: 10 | Total Items: 100 

            </p>
            <input type="number" value={currentPage} onChange={(e) => goToPage(Number(e.target.value))} min={1} max={totalPages} />

        </div>
    )
}

export default PaginationDem