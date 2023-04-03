import React, { useState } from 'react';
import { MdDone } from 'react-icons/md'
import './Card.scss';
import { Loader } from '../Loader/Loader';

export const Card = ({ card }) => {
  const { id, title, imgUrl, newPrice, oldPrice } = card;

  const [loading, setLoading] = useState(false)
  const [sold, setSold] = useState(false)

  const buyingProduct = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSold(true)
    }, 2000)
  }

  return (
    <div className={id !== 4 ? 'card' : 'card opacity'}>
      <div className="card-img">
        <img src={imgUrl} alt="" />
      </div>
      <div className="card-info">
        <div className="card-info__productName">
          <div to={'product'}>{title}</div>
        </div>
        <div className="card-info__buy-price">
          {oldPrice || newPrice ? (
            <div className="price">
              {oldPrice ? <span className="price-old">{oldPrice} $</span> : ''}
              <span className="price-new">{newPrice} $</span>
            </div>
          ) : (
            ''
          )}
          {
            loading
              ? <div style={{ display: 'flex', justifyContent: 'center', marginLeft: '40px' }}><Loader /></div>
              : oldPrice || newPrice ? (
                <button className="buy" onClick={buyingProduct}>{sold ? <span style={{ display: 'flex', alignItems: 'center' }}><MdDone />В корзине</span> : 'Купить'}</button>
              ) : (
                <span className="sold">Продана на аукционе</span>
              )
          }

        </div>
      </div>
    </div>
  );
};
