import React, { useEffect, useState } from 'react';
import { Loader } from '../Loader/Loader';
import { ProductPurchased } from '../ProductPurchased/ProductPurchased';
import './Card.scss';
import { ModalWindow } from '../ModalWindow/ModalWindow';

export const Card = ({ card }) => {
  const { id, title, imgUrl, newPrice, oldPrice } = card;
  const [loading, setLoading] = useState(false);
  const [sold, setSold] = useState(
    JSON.parse(window.sessionStorage.getItem(`sold.${id}`)) || false
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const buyingProduct = () => {
    if (sold) {
      setSold(false)
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setSold(true);
      }, 2000);
    }
  };

  useEffect(() => {
    sessionStorage.setItem(`sold.${id}`, JSON.stringify(sold));
  }, [sold]);

  return (
    <>
      <div className={id !== 4 ? 'card' : 'card opacity'}>
        <div className="card-img">
          <img src={imgUrl} alt={title} />
        </div>
        <div className="card-info">
          <div className="card-info__productName" onClick={openModal}>
            <h4>{title}</h4>
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
              <div className="buy" style={{ display: 'flex', justifyContent: 'center' }}>
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

      {isModalOpen && (
        <ModalWindow onClose={closeModal}>
          <div className="card-img">
            <img src={imgUrl} alt="" />
          </div>
          <h2 style={{ marginBottom: '10px' }}>{title}</h2>
          <p style={{ marginBottom: '15px' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            Eius a maxime molestias corrupti nesciunt quis nihictus odio laborum ducimus sit.
          </p>
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
        </ModalWindow>
      )}
    </>
  );
};
