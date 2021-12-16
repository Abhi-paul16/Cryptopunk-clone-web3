import React from 'react'
import './Header.css'
import punklogo from "../assets/header/"
export default function Header() {
    return (
        <div className='header' >
           <div className="logoContainer">
               <img src={punklogo} alt="" />
           </div>
        </div>
    )
}
