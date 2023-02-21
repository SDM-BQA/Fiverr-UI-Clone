import React, { useState } from "react";
import GigsCard from "../../components/gigCard/GigsCard";
import { gigs } from "../../Data";
import "./Gigs.scss";

function Gigs() {
  const [sort, setSort] = useState("sales");
  const [menuOpen, setMenuOpen] = useState(false);

  const reSort = (type) => {
    setSort(type);
    setMenuOpen(false);
  };

  return (
    <div className="gigs">
      <div className="container">
        <div className="breadCrumb">FIVERR > GRAPHICS & DESIGN > </div>

        <div className="catHead">
          <h1>AI Artists</h1>
          <p>
            Explore the boundaries of art and technology with Fiverr's AI
            artists
          </p>
        </div>

        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="text" placeholder="min" />
            <input type="text" placeholder="max" />
            <button>Apply</button>
          </div>
          <div className="right">
            <span>Sort by</span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img
              src="./img/down.png"
              alt=""
              onClick={() => setMenuOpen(!menuOpen)}
            />
            {menuOpen && (
              <div className="rightMenu">
                {sort !== "sales" ? (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                ) : (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="cards">
          {gigs.map((gig) => (
            <GigsCard item={gig} key={gig.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gigs;
