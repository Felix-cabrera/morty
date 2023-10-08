import React from 'react'

const Pagination = ({productsPerPage, currentPage, setCurrentPage, totalProducts}) => {

  const pageNumbers = []
  for(let i = 1; i <= Math.ceil(totalProducts/productsPerPage) ; i++){
    pageNumbers.push(i)
  }

  const onPreviusPage = () => {
    if(currentPage - 1 >= 1)
    setCurrentPage(currentPage - 1)
  }
  const onNextPage = () => {
    if(currentPage + 1 <= pageNumbers.length)
    setCurrentPage(currentPage + 1)
  }
  const onSpecifiPage = (n) => {
    setCurrentPage(n)
  }
  return (
    <nav className="pagination is-centered mb-3" role="navigation" aria-label="pagination">
      <a className={`pagination-previous ${currentPage === 1 ? 'is-disabled':''}`} onClick={onPreviusPage}>Previous</a>
      <a className={`pagination-next ${currentPage >= pageNumbers.length ? 'is-disabled':''}`} onClick={onNextPage}>Next page</a>
      <ul className="pagination-list">
        { pageNumbers.map(noPage => (
          <li key={noPage}>
            <a className={`pagination-link ${noPage === currentPage ?'is-current' : ''}`}
            onClick={() => onSpecifiPage(noPage)}>{noPage}</a>
          </li>
        ))}
      </ul>
  </nav>
  )
}

export default Pagination