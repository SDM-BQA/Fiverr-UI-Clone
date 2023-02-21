import React from 'react'
import './Featured.scss'

function Featured() {
  return (
    <div className='featured'>
      <div className="container">
        <div className="left">
            <h1>Find the perfect <i>freelance</i> services for your business</h1>
            <div 
            className="searchInput">
                <div className="search">
                    <img src="./img/search.png" alt="" />
                    <input type="text" placeholder='Try "building mobile app"'/>
                </div>
                <button>Search</button>
            </div>
            <div className="tags">
                <p>Popular: </p>
                <button className="tag">Website Design</button>
                <button className="tag">Wordpress</button>
                <button className="tag">Logo Design</button>
                <button className="tag">AI Services</button>
            </div>
        </div>
        <div className="right">
            <img src="./img/man.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Featured
