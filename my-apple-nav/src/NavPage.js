import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import iconStripApple from './iconStripApple.PNG'

class NavPage extends Component {
    render() {
        return (
            <div>
            <div className="top-nav-bar">
                <div>
                  <div className="apple-logo menu-link">Apple</div>  
                </div>
                <nav className="nav-bar">
                    <Link className="menu-link" to="#">Mac</Link>
                    <Link className="menu-link" to="#">iPhone</Link>
                    <Link className="menu-link" to="#">iPad</Link>
                    <Link className="menu-link" to="#">Watch</Link>
                    <Link className="menu-link" to="#">TV</Link>
                    <Link className="menu-link" to="#">Music</Link>
                    <Link className="menu-link" to="#">Support</Link>
                </nav>
                <div className="search-and-shop">
                  <div className="top-nav-bar menu-link">Search</div>
                  <div className="top-nav-bar menu-link">Shop</div>
                </div>
            </div>
            <div>
                <img src={iconStripApple}/>
            </div>
            </div>

        );
    }
}

export default NavPage;