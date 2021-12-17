import React from 'react'
import './Header.css'
import punklogo from "../assets/header/cryptopunk-logo.png"
import searchIcon from"../assets/header/search.png";
import themeSwitchIcon from "../assets/header/theme-switch.png";
export default function Header() {
    return (
        <div className='header' >
           
           <div className="logoContainer">
               <img src={punklogo} className='punklogo' alt="" />
           </div>

           <div className="searchBar">
              <div className="searchIconContainer">
                  <img src={searchIcon} alt="" />
              </div>
              <input type="text" className='searchInput' placeholder='Collections , items or user' />
           </div>

           <div className="header-items">
              <p>Drops</p>
              <p>MarketPlace</p>
              <p> Create </p>
           </div>


           <div className="headerActions">
               <div className="themeSwitchContainer">
                   <img src={themeSwitchIcon} alt="" />
               </div>
           </div>

           <div className="loginButton">GET IN</div>
        </div>
    )
}
