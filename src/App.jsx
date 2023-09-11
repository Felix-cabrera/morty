import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import getRandomNumber from './utils/getRandomNumber'
import Pagination from './components/Pagination'

function App() {
  const [inpuntValue, setInpuntValue] = useState(getRandomNumber(126))
  const url = `https://rickandmortyapi.com/api/location/${inpuntValue || 'hola'}`
  const [location, getLocation, hasError, isLoading] = useFetch(url)

  useEffect(() => {
    getLocation()
  },[inpuntValue])

  const inputSearch = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    setInpuntValue(inputSearch.current.value.trim())
  }

  const[productsPerPage, setProductsPerPage] = useState(8)
  const[currentPage, setCurrentPage] = useState(1)
  const totalProducts = location?.residents.length
  const lastIndex = currentPage * productsPerPage
  const firstIndex = lastIndex - productsPerPage

  return (
    <>
      <header>
        <img className='header__image' src="/Frame 259fondo.png" alt="" />
      </header>
      <form className='form' onSubmit={handleSubmit}>
        <input className='form__input' ref={inputSearch} type="text" />
        <button className='form__button'>Search</button>
      </form>
      {
        isLoading
        ? <h2 className='loading'>Loading...</h2>
        : (
          hasError
          ? <h2 className='loading'>❌ Hey! you must provide an id from 1 to 126 😭</h2>
          :(
            <>
              <div className='location__container'>
                <LocationInfo
                  location={location}
                />
              </div>
              <main className='resident__container'>
            {
              location?.residents.map(url => (
              <ResidentCard 
                key={url}
                url={url}
               />
              )).slice(firstIndex, lastIndex)
            }
              </main>
            </>
          )
        ) 
      }
      <Pagination
      productsPerPage={productsPerPage}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      totalProducts={totalProducts}
      lastIndex={lastIndex}
      firstIndex={firstIndex}
    />
      <footer className='footer__container'>
        <h2 className='footer__title'>Made with ❤️ in academlo</h2>
      </footer>
    </>
  )
}

export default App
