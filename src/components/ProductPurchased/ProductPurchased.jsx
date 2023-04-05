import React from 'react'
import { MdDone } from 'react-icons/md'

export const ProductPurchased = () => {
  return (
    <span style={{ display: 'flex', alignItems: 'center' }}>
      <MdDone
        style={{ marginRight: '5px', marginLeft: '5px' }}
      />В корзине
    </span>
  )
}
