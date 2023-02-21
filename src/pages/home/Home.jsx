import React from "react";
import Featured from "../../components/featured/Featured";
import Slide from "../../components/slide/Slide";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import { cards } from "../../Data";
import { projects } from "../../Data";
import CatCard from "../../components/catCard/CatCard";
import "./Home.scss";
import ProductCard from "../../components/productCard/ProductCard";

function Home() {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard item={card} key={card.id} />
        ))}
      </Slide>

      {/* feat1 */}
      <div className="features">
        <div className="container">
          <div className="left">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="para">
              <div className="head">
                <img src="./img/check.png" alt="check" />
                <span>The best for every budget</span>
              </div>
              <div className="ex">
                Find high-quality services at every price point. No hourly
                rates, just project-based pricing.
              </div>
            </div>
            <div className="para">
              <div className="head">
                <img src="./img/check.png" alt="check" />
                <span>The best for every budget</span>
              </div>
              <div className="ex">
                Find high-quality services at every price point. No hourly
                rates, just project-based pricing.
              </div>
            </div>
            <div className="para">
              <div className="head">
                <img src="./img/check.png" alt="check" />
                <span>The best for every budget</span>
              </div>
              <div className="ex">
                Find high-quality services at every price point. No hourly
                rates, just project-based pricing.
              </div>
            </div>
            <div className="para">
              <div className="head">
                <img src="./img/check.png" alt="check" />
                <span>The best for every budget</span>
              </div>
              <div className="ex">
                Find high-quality services at every price point. No hourly
                rates, just project-based pricing.
              </div>
            </div>
            <div className="para">
              <div className="head">
                <img src="./img/check.png" alt="check" />
                <span>The best for every budget</span>
              </div>
              <div className="ex">
                Find high-quality services at every price point. No hourly
                rates, just project-based pricing.
              </div>
            </div>
          </div>
          <div className="right">
            <img src="./img/man.png" alt="" />
          </div>
        </div>
      </div>

      {/* feat2 */}
      <div className="features blue">
        <div className="container">
          <div className="feat2-left">
            <h2>
              fiverr business. <span>NEW</span>
            </h2>
            <h1>A business solution designed for <i>teams</i></h1>

            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <div className="checks">
              <div className="check">
                <img src="./img/check.png" alt="" />
                Connect to freelancers with proven business experience
              </div>
              <div className="check">
                <img src="./img/check.png" alt="" />
                Connect to freelancers with proven business experience
              </div>
              <div className="check">
                <img src="./img/check.png" alt="" />
                Connect to freelancers with proven business experience
              </div>
              <div className="check">
                <img src="./img/check.png" alt="" />
                Connect to freelancers with proven business experience
              </div>
            </div>
            <button>Explore Fiverr Business</button>
          </div>
          <div className="feat2-right">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Product Image */}
      
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProductCard item={card} key={card.id} />
        ))}
      </Slide>
    </div>
  );
}

export default Home;
