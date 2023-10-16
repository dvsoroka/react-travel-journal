//import React from 'react'
import navLogo from '../assets/img/Logo.png'
export default function Navbar() {
    return (
        <nav>
            <img  
                   src={navLogo} 
                   alt="React logo" 
                   className="nav--icon" 
            />  
{/*           <img className="nav--logo" src="../assets/img/Logo.svg" />   */} 
            <span className="nav--text">my traveljournal</span>  
        </nav>
    )
}