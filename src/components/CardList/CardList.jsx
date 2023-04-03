import React from 'react'
import { Card } from '../Card/Card.jsx'
// import data from '../../data/data'

import './CardList.scss'

export const CardList = ({ cards }) => {
  return (
    <div className='card-list'>
      <ul>
        {cards.map(card => {
          return (
            <li key={card.id} >
              <Card card={card} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
