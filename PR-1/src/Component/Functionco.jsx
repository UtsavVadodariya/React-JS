import React from 'react'

export default function Functionco() {
    return(
    <header>
        <nav className="navbar">
            <div className="logo">
                <img src="/logo.png" alt="" />
            </div>
            <ul className="nav-links">
                <li><a href=""><i className="fas fa-home"></i> Home</a></li>
                <li><a href=""><i className="fas fa-cogs"></i> Services</a></li>
                <li><a href=""><i className="fas fa-info-circle"></i> About</a></li>
                <li><a href=""><i className="fas fa-briefcase"></i> Portfolio</a></li>
                <li><a href=""><i className="fas fa-envelope"></i> Contact</a></li>
            </ul>
        </nav>
    </header>
    )
}

