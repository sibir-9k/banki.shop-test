import React from 'react'
import phone from '../../assets/phone.svg'
import map from "../../assets/map.svg"
import './Footer.scss'

export const Footer = () => {
  return (
    <footer>
      <nav className='footer-nav'>
        <ul>
          <li>Каталог</li>
          <li>Доставка</li>
          <li>Оплата</li>
          <li>Контакты</li>
          <li>О компании</li>
        </ul>
      </nav>
      <div className='footer-info'>
        <div className='phone'>
          <img src={phone} alt="" />
          <a href="tel:+78125555555">+7 (812) 555-55-55</a></div>
        <div className='adress'>
          <img src={map} alt="" />
          <span>г. Санкт-Петербург, ул. Ефимова, 3</span>
        </div>
      </div>
    </footer>
  )
}
