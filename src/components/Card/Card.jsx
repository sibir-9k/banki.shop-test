import React from 'react'

import './Card.scss'

export const Card = ({ card }) => {
  const { title, imgUrl, newPrice, oldPrice } = card
  return (
    <div className="card">
      <div className="card-img">
        <img src={imgUrl} alt="" />
      </div>
      <div className="card-info">
        <div className="card-info__productName">
          <div to={'product'} >{title}</div>
        </div>
        <div className="card-info__buy-price">
          {(oldPrice || newPrice) 
          ? <div className='price'>
              {oldPrice ? <span className="price-old">{oldPrice} $</span> : ''}
              <span className="price-new">{newPrice} $</span>
            </div> 
          : ''}
          <button className="buy">
            Купить
          </button>
        </div>
      </div>
    </div>
  )
}
