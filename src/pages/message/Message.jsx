import React from 'react'
import { Link } from 'react-router-dom'
import './Message.scss'

function Message() {
  return (
    <div className='message'>
      <div className="container">
        <div className="breadCrumbs">
          <Link className="link" to='/messages'>Messages</Link> > <Link to="/message/123" className='link'>John Doe</Link>
        </div>
        <div className="messageArea">
          <div className="item">
            <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/142d8deba1b361cf47e3a0b05cb96af6-1659803148947/bd7aea74-6cf7-46bb-a9fb-903ae72acbae.jpeg" alt="itemImg" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga nesciunt modi ratione excepturi repudiandae hic dolor ea sint minus, est porro quos quo nihil odit incidunt ipsam totam debitis possimus?
            </p>
          </div>
          <div className="item owner">
            <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/142d8deba1b361cf47e3a0b05cb96af6-1659803148947/bd7aea74-6cf7-46bb-a9fb-903ae72acbae.jpeg" alt="itemImg" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga nesciunt modi ratione excepturi repudiandae hic dolor ea sint minus, est porro quos quo nihil odit incidunt ipsam totam debitis possimus?
            </p>
          </div>
          <div className="item">
            <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/142d8deba1b361cf47e3a0b05cb96af6-1659803148947/bd7aea74-6cf7-46bb-a9fb-903ae72acbae.jpeg" alt="itemImg" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga nesciunt modi ratione excepturi repudiandae hic dolor ea sint minus, est porro quos quo nihil odit incidunt ipsam totam debitis possimus?
            </p>
          </div>
          <div className="item owner">
            <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/142d8deba1b361cf47e3a0b05cb96af6-1659803148947/bd7aea74-6cf7-46bb-a9fb-903ae72acbae.jpeg" alt="itemImg" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga nesciunt modi ratione excepturi repudiandae hic dolor ea sint minus, est porro quos quo nihil odit incidunt ipsam totam debitis possimus?
            </p>
          </div>
          <div className="item owner">
            <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/142d8deba1b361cf47e3a0b05cb96af6-1659803148947/bd7aea74-6cf7-46bb-a9fb-903ae72acbae.jpeg" alt="itemImg" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga nesciunt modi ratione excepturi repudiandae hic dolor ea sint minus, est porro quos quo nihil odit incidunt ipsam totam debitis possimus?
            </p>
          </div>
          <div className="item">
            <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/142d8deba1b361cf47e3a0b05cb96af6-1659803148947/bd7aea74-6cf7-46bb-a9fb-903ae72acbae.jpeg" alt="itemImg" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga nesciunt modi ratione excepturi repudiandae hic dolor ea sint minus, est porro quos quo nihil odit incidunt ipsam totam debitis possimus?
            </p>
          </div>
          <div className="item">
            <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/142d8deba1b361cf47e3a0b05cb96af6-1659803148947/bd7aea74-6cf7-46bb-a9fb-903ae72acbae.jpeg" alt="itemImg" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga nesciunt modi ratione excepturi repudiandae hic dolor ea sint minus, est porro quos quo nihil odit incidunt ipsam totam debitis possimus?
            </p>
          </div>
          <div className="item owner">
            <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/142d8deba1b361cf47e3a0b05cb96af6-1659803148947/bd7aea74-6cf7-46bb-a9fb-903ae72acbae.jpeg" alt="itemImg" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga nesciunt modi ratione excepturi repudiandae hic dolor ea sint minus, est porro quos quo nihil odit incidunt ipsam totam debitis possimus?
            </p>
          </div>
        </div>
        <hr />
        <div className="writeMsg">
          <textarea placeholder='Write a Message' cols="30" rows="10"></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Message
