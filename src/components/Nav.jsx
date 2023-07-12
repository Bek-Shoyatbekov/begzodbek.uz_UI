import React from "react";
import "../styles/navbar.css"
import {Link} from "react-router-dom";


export function Nav() {
    return (
        <>
            <div className="navbar">
                <Link to={'/'} className="item">Bek's Blog</Link>
                <Link to={'/articles'} className="item">Articles</Link>
                <Link to={'/about'} className="item">About</Link>
                <Link to={'/projects'} className="item">Projects</Link>
            </div>
        </>
    )
}