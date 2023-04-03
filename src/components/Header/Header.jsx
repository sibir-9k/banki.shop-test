import React from 'react'
import './Header.scss'

export const Header = ({ value, setValue }) => {

  return (
    <div className='header'>
      <nav className='header-nav'>
        <ul>
          <li>Каталог</li>
          <li>Доставка</li>
          <li>Оплата</li>
          <li>Контакты</li>
          <li>О компании</li>
        </ul>
      </nav>
      <div className='header-search'>
        <form>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder="Поиск по названию картины" />
          <button type="submit">Найти</button>
        </form>
      </div>
    </div>
  )
}
