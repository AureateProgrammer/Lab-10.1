import { usePagination } from '../hooks/usePagination'

const PaginationDem = () => {
    const { currentPage, totalPages, goToPage, nextPage, prevPage, initialPage } = usePagination(100, 10)
    function setItemsPerPage(arg0: number): void {
        throw new Error('Function not implemented.')
    }
    const itemsPerPage = 10

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

            <div style={{ marginTop: '20px' }}>
                <label htmlFor="pageInput">Items per page: </label>
                <select id ="items-select" value = {itemsPerPage} onChange={(e) => setItemsPerPage(Number(e.target.value))}>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                </select>
            </div>

        </div>
    )
}

export default PaginationDem