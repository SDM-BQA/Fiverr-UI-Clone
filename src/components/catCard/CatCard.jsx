import React from 'react'
import {Link} from 'react-router-dom'
import './CatCard.scss'

function CatCard({item}) {
  return (
    <Link to="/gigs?cat=design">

    <div className='catCard'>
        <img src={item.img} alt={item.title} />
        <span className='desc'>
        {item.desc}
        </span>
        <span className='title'>
        {item.username}
        </span>
    </div>
    </Link>
  )
}

export default CatCard
