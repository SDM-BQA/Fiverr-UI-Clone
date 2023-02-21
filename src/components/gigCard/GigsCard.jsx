import React from 'react'
import { Link } from 'react-router-dom'
import './GigCard.scss'

function GigsCard({item}) {
  return (
    <Link to="/gig/123" className='link'>
    <div className='gigCard'>
      <img src={item.img} alt={item.id} />
      <div className="user">
        <img src={item.pp} alt="" />
        <span>{item.username}</span>
      </div>
      <div className="info">
        <p>{item.desc}</p>
        <div className="star">
          <img src="./img/star.png" alt="" /><span>{item.star}</span>
        </div>
      </div>
      <hr />
      <div className="details">
        <img src="./img/heart.png" alt="" />
        <div className="price">
          <p>STARTING AT</p>
          <p className='dollar'>${item.price}</p>
        </div>
      </div>
      
    </div>
    </Link>
  )
}

export default GigsCard
