import React from 'react'

export default function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="navbar__brand">
                TODO<span className="text-yellow">LIST.</span>
            </h1>
            <ul className="navbar__menu">
                <li className="navbar__item">
                    <a className="navbar__link">Portofolio</a>
                </li>
                <li className="navbar__item">
                    <a className="navbar__link">About Me</a>
                </li>
            </ul>
        </nav>

    )
}
