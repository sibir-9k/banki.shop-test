import { useState, useEffect } from 'react'
import data from './data/data.js'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import './App.css'

function App() {
  const [search, setSearch] = useState('')
  const [cardList, setCardList] = useState(data)

  const filterCards = (searchText, listOfCards) => {
    if (!searchText) {
      return listOfCards;
    }
    return listOfCards.filter((card) =>
      card.title.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  useEffect(() => {
    const debounce = setTimeout(() => {
      const filteredCards = filterCards(search, data);
      setCardList(filteredCards);
    }, 150);
    return () => clearTimeout(debounce);
  }, [search]);


  return (
    <div className="App">
      <Header value={search} setValue={setSearch} />
      <Main cards={cardList} />
      <Footer />
    </div>
  )
}

export default App
