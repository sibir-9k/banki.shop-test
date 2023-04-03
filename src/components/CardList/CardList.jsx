import React from 'react'
import { Card } from '../Card/Card.jsx'
import data from '../../data/data'

import './CardList.scss'

export const CardList = () => {
  return (
    <div className='card-list'>
      <ul>
        {data.map(card => {
          return <Card key={card.id} card={card} />
        })}
      </ul>
    </div>
  )
}
