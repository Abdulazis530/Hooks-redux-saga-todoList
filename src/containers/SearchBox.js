import React from 'react'

export default function SearchBox() {
    return (
        <div className="search-box">
            <input type="text" placeholder="Search your todo" />
            <i className="search fas fa-search"></i>
            <button type="button"> <i className="fas fa-redo"></i> <span>reset</span></button>
        </div>
    )
}
