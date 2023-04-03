import React from 'react'
import { CardList } from '../CardList/CardList'
import "./Main.scss"

export const Main = ({ cards }) => {
  return (
    <main>
      <h1>Картины эпохи Возрождения</h1>
      <CardList cards={cards} />
    </main>
  )
}
