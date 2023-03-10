import React from 'react'
import './Add.scss'

function Add() {
  return (
    <div className='add'>
      <div className="container">
      <h1>Add New Gig</h1>
        <div className="sections">
        <div className="left">
        <label htmlFor="">Title</label>
        <input type="text" placeholder='e.g. i will do everything for really good ai' />
        <label htmlFor="">Category</label>
        <select name="cats" id="cats">
          <option value="design">Design</option>
          <option value="wd">Web Development</option>
          <option value="animation">Animation</option>
        </select>

        <label htmlFor="">Cover Image</label>
        <input type="file" />
        <label htmlFor="">Uploads Images</label>
        <input type="file" multiple />
        <label htmlFor="">Description</label>
        <textarea name="" id="" cols="30" rows="10"
        placeholder='describe your product'></textarea>

        <button>Create</button>
        </div>
        <div className="right">

            <label htmlFor="">Service Title</label>
            <input type="text" placeholder="e.g. One-page web design" />
            <label htmlFor="">Short Description</label>
            <textarea name="" id="" placeholder="Short description of your service" cols="30" rows="10"></textarea>
            <label htmlFor="">Delivery Time (e.g. 3 days)</label>
            <input type="number" />
            <label htmlFor="">Revision Number</label>
            <input type="number" />
            <label htmlFor="">Add Features</label>
            <input type="text" placeholder="e.g. page design" />
            <input type="text" placeholder="e.g. file uploading" />
            <input type="text" placeholder="e.g. setting up a domain" />
            <input type="text" placeholder="e.g. hosting" />
            <label htmlFor="">Price</label>
            <input type="number" />
          </div>
        </div>
      </div>
      </div>

  )
}


export default Add
