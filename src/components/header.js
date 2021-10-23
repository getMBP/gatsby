import React from "react"
import { Link } from "gatsby"

const Header = () => {
    return (
        <header>
            <h1><Link to="/">Home</Link> </h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/blog">Leads</Link>
                    </li>
                   
                    <li>
                    <Link to="/about">About</Link>
                    </li> 
                    <li>
                    <Link to="/contact">Contacts</Link>
                    </li>
                </ul>
            </nav>
        </header>
        )
}

export default Header