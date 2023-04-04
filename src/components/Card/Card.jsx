import React, { useEffect, useState } from 'react';
import { Loader } from '../Loader/Loader';
import { ProductPurchased } from '../ProductPurchased/ProductPurchased';
import './Card.scss';

export const Card = ({ card }) => {
  const { id, title, imgUrl, newPrice, oldPrice } = card;
  const [loading, setLoading] = useState(false);
  const [sold, setSold] = useState(
    JSON.parse(window.sessionStorage.getItem(`sold.${id}`)) || false
  );

  const buyingProduct = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSold(true);
    }, 2000);
  };

  useEffect(() => {
    sessionStorage.setItem(`sold.${id}`, JSON.stringify(sold))
  }, [sold])


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
          {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', marginLeft: '40px' }}>
              <Loader />
            </div>
          ) : oldPrice || newPrice ? (
            <button className="buy" onClick={buyingProduct}>
              {sold ? <ProductPurchased /> : 'Купить'}
            </button>
          ) : (
            <span className="sold">Продана на аукционе</span>
          )}
        </div>
      </div>
    </div>
  );
};
