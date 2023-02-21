import React, { useEffect, useState } from 'react'
import {Link, useLocation} from 'react-router-dom'
import './Navbar.scss'

function Navbar() {

    const [active, setActive] = useState(false)
    const [open, setOpen] = useState(false)

    const {pathname} = useLocation()

    const currentUser={
        id:1,
        userName:"John Doe",
        isSeller:true,
    }


    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', isActive)
        return () => {
            window.addEventListener('scroll', isActive)

        }
    }, [])

    return (
        <div className={active || pathname!=='/' ? "navbar active" : "navbar"}>
            <div className="container">
                <div className="logo">
                    <Link to="/" className='link'>
                    <span className='text'>fiverr</span>
                    </Link>
                    <span className='dot'>.</span>
                </div>
                <div className="links">
                    <span>Fiverr Bussiness</span>
                    <span>Explore</span>
                    <span>English</span>
                    {!currentUser?.isSeller && <span>Become a Seller</span>}
                    <span>Sign in</span>
                    {!currentUser &&
                        <button className={active?"active":""}>Join</button>}
                    {
                        currentUser &&(
                            <div className="user" onClick={()=>setOpen(!open
                            )}>
                                <img src="data:image/jpeg;base64,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" alt={currentUser.userName}/>
                                <span>{currentUser.userName}</span>
                              {
                                open &&
                                <div className="options">
                                    {
                                        currentUser?.isSeller &&(
                                            <>
                                           <Link to="/myGigs" className='link'> <span>Gigs</span></Link>
                                           <Link to="/add" className='link'> <span>Add New Gig</span></Link>
                                            </>
                                        )
                                    }
                                    <Link className='link' to="/orders"><span>Orders</span></Link>
                                    <Link className='link' to="/messages"><span>Messages</span></Link>
                                    <Link className='link' to="/"><span>Logout</span></Link>
                                </div>}
                            </div>
                        )
                    }
                </div>
            </div>
            {(active || pathname !=="/") &&
                <>
                    <hr />
                    <div className="menu">
                        <span><Link className='link' to="/">Graphics & Design</Link></span>
                        <span><Link className='link' to="/">Digital Marketing</Link></span>
                        <span><Link className='link' to="/">Writting & Translation</Link></span>
                        <span><Link className='link' to="/">Video & Animation</Link></span>
                        <span><Link className='link' to="/">Music & Audio</Link></span>
                        <span><Link className='link' to="/">Programming & Tech</Link></span>
                        <span><Link className='link' to="/">Business</Link></span>
                        <span><Link className='link' to="/">Lifestyle</Link></span>
                        <span><Link className='link' to="/">AI Services</Link></span>

                    </div>
                    <hr />
                </>}
        </div>
    )
}

export default Navbar
