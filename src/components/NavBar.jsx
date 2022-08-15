import React from 'react';
import './NavBar.css'

const Header = (props) => {
    return(
    <tittle>
        <h1>
            Social<small className='mutedText'>Feed</small>
        </h1>
        <nav className='nav'>
            <ul>
                <li><a href='index.js'>This</a></li>
                <li><a href='index.js'>is</a></li>
                <li><a href='index.js'>a</a></li>
                <li><a href='index.js'>Nav</a></li>
                <li><a href='index.js'>Menu</a></li>
            </ul>
        </nav>
    </tittle>
    )
}
export default Header;

