import React from 'react'
import './Gig.scss'
import { Slider } from "infinite-react-carousel/lib";

function Gig() {
  return (
    <div className='gig'>
      <div className="container">
        <div className="left">
          <div className="breadCrumb">FIVERR > GRAPHICS & DESIGN > </div>
          <div className="catHead">
            <h1>AI Artists</h1>
            <div className='userInfo'>
              <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/142d8deba1b361cf47e3a0b05cb96af6-1659803148947/bd7aea74-6cf7-46bb-a9fb-903ae72acbae.jpeg" alt="" />
              <span>John Doe</span>

              <div className="star">
                <img src="/img/star.png" alt="star" />
                <img src="/img/star.png" alt="star" />
                <img src="/img/star.png" alt="star" />
                <img src="/img/star.png" alt="star" />
                <img src="/img/star.png" alt="star" />
              </div>
              <span>5</span>
            </div>
          </div>


          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
            <img
              src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </Slider>

          <h2>About This Gig</h2>
          <p>
            I use an AI program to create images based on text prompts. This
            means I can help you to create a vision you have through a textual
            description of your scene without requiring any reference images.
            Some things I've found it often excels at are: Character portraits
            (E.g. a picture to go with your DnD character) Landscapes (E.g.
            wallpapers, illustrations to compliment a story) Logos (E.g. Esports
            team, business, profile picture) You can be as vague or as
            descriptive as you want. Being more vague will allow the AI to be
            more creative which can sometimes result in some amazing images. You
            can also be incredibly precise if you have a clear image of what you
            want in mind. All of the images I create are original and will be
            found nowhere else. If you have any questions you're more than
            welcome to send me a message.
          </p>

          <div className="seller">
            <h2>About The Seller</h2>
            <div className="sellerInfo">
              <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/142d8deba1b361cf47e3a0b05cb96af6-1659803148947/bd7aea74-6cf7-46bb-a9fb-903ae72acbae.jpeg" alt="" />
              <div className='name'>
                <span>Jhon Doe</span>
                <div className="star">
                  <img src="/img/star.png" alt="star" />
                  <img src="/img/star.png" alt="star" />
                  <img src="/img/star.png" alt="star" />
                  <img src="/img/star.png" alt="star" />
                  <img src="/img/star.png" alt="star" />
                </div>
                <button>Contact Us</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="items">
                  <div className="item">
                    <span className="title">From</span>
                    <span className="desc">USA</span>
                  </div>
                  <div className="item">
                    <span className="title">Member since</span>
                    <span className="desc">Aug 2022</span>
                  </div>
                  <div className="item">
                    <span className="title">Avg. response time</span>
                    <span className="desc">4 hours</span>
                  </div>
                  <div className="item">
                    <span className="title">Last delivery</span>
                    <span className="desc">1 day</span>
                  </div>
                  <div className="item">
                    <span className="title">Languages</span>
                    <span className="desc">English</span>
                  </div>
                </div>
              </div>
              <hr />
              <p>
                My name is Anna, I enjoy creating AI generated art in my spare
                time. I have a lot of experience using the AI program and that
                means I know what to prompt the AI with to get a great and
                incredibly detailed result.
              </p>
            </div>
          </div>

          <div className="reviews">
            <h2>Reviews</h2>

            <div className="review">
              <div className="head">
                <div className="cus">
                  <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/142d8deba1b361cf47e3a0b05cb96af6-1659803148947/bd7aea74-6cf7-46bb-a9fb-903ae72acbae.jpeg" alt="pro" />
                  <div className="cusName">
                    <span>Jhon Doe</span>
                    <span>United Stete</span>
                  </div>
                </div>
                <div className="star">
                  <img src="/img/star.png" alt="star" />
                  <img src="/img/star.png" alt="star" />
                  <img src="/img/star.png" alt="star" />
                  <img src="/img/star.png" alt="star" />
                  <img src="/img/star.png" alt="star" />
                </div>
              </div>
              <div className="reviewBody">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum quisquam assumenda temporibus praesentium earum voluptate qui expeditidem odit omnis nisi. Blanditiis earum quas tenetur mollitia non, quasiam aliquam maxime dolorum maiores ratione dicta laborum soluta libero magni consequuntur similique. Soluta laborum velit aut om nulla quidem. Illum, ipsa deserunt.</div>
              <div className="reviewFooter">
                <span>helpful</span>
                <img src="/img/like.png" alt="like" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="like" />
                <span>No</span>
              </div>
              <hr />
            </div>
            <div className="review">
              <div className="head">
                <div className="cus">
                  <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/142d8deba1b361cf47e3a0b05cb96af6-1659803148947/bd7aea74-6cf7-46bb-a9fb-903ae72acbae.jpeg" alt="pro" />
                  <div className="cusName">
                    <span>Jhon Doe</span>
                    <span>United Stete</span>
                  </div>
                </div>
                <div className="star">
                  <img src="/img/star.png" alt="star" />
                  <img src="/img/star.png" alt="star" />
                  <img src="/img/star.png" alt="star" />
                  <img src="/img/star.png" alt="star" />
                  <img src="/img/star.png" alt="star" />
                </div>
              </div>
              <div className="reviewBody">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum quisquam assumenda temporibus praesentium earum voluptate qui expeditidem odit omnis nisi. Blanditiis earum quas tenetur mollitia non, quasiam aliquam maxime dolorum maiores ratione dicta laborum soluta libero magni consequuntur similique. Soluta laborum velit aut om nulla quidem. Illum, ipsa deserunt.</div>
              <div className="reviewFooter">
                <span>helpful</span>
                <img src="/img/like.png" alt="like" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="like" />
                <span>No</span>
              </div>
              <hr />
            </div>
            <div className="review">
              <div className="head">
                <div className="cus">
                  <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/142d8deba1b361cf47e3a0b05cb96af6-1659803148947/bd7aea74-6cf7-46bb-a9fb-903ae72acbae.jpeg" alt="pro" />
                  <div className="cusName">
                    <span>Jhon Doe</span>
                    <span>United Stete</span>
                  </div>
                </div>
                <div className="star">
                  <img src="/img/star.png" alt="star" />
                  <img src="/img/star.png" alt="star" />
                  <img src="/img/star.png" alt="star" />
                  <img src="/img/star.png" alt="star" />
                  <img src="/img/star.png" alt="star" />
                </div>
              </div>
              <div className="reviewBody">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum quisquam assumenda temporibus praesentium earum voluptate qui expeditidem odit omnis nisi. Blanditiis earum quas tenetur mollitia non, quasiam aliquam maxime dolorum maiores ratione dicta laborum soluta libero magni consequuntur similique. Soluta laborum velit aut om nulla quidem. Illum, ipsa deserunt.</div>
              <div className="reviewFooter">
                <span>helpful</span>
                <img src="/img/like.png" alt="like" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="like" />
                <span>No</span>
              </div>

            </div>
          </div>
        </div>
        <div className="right">
          <div className="rBox">
            <div className="price">
              <h3>1 AI generated image</h3>
              <h2>$ 59.99</h2>
            </div>
            <p>
              I will create a unique high quality AI generated image based on a
              description that you give me
            </p>
            <div className="details">
              <div className="item">
                <img src="/img/clock.png" alt="" />
                <span>2 Days Delivery</span>
              </div>
              <div className="item">
                <img src="/img/recycle.png" alt="" />
                <span>3 Revisions</span>
              </div>
            </div>
            <div className="features">
              <div className="item">
                <img src="/img/greencheck.png" alt="" />
                <span>Prompt writing</span>
              </div>
              <div className="item">
                <img src="/img/greencheck.png" alt="" />
                <span>Artwork delivery</span>
              </div>
              <div className="item">
                <img src="/img/greencheck.png" alt="" />
                <span>Image upscaling</span>
              </div>
              <div className="item">
                <img src="/img/greencheck.png" alt="" />
                <span>Additional design</span>
              </div>
            </div>
            <button>Continue</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Gig
