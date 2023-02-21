import React from 'react'
import './ProductCard.scss'
function ProductCard({item}) {
  return (
    <div className='productCard'>
      <img src={item.img} alt={item.id} />
      <div className="info">
        <img src={item.pp} alt={item.id} />
        <div className="name">
            <p className='cat'>{item.cat}</p>
            <p>by {item.username}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
