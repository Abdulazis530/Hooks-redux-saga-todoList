import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';


export default function SearchInput() {
    const [value, setValue] = useState("")

    useEffect(() => {
        //sent filter to reducer
        console.log(value)
    }, [value])

    const handleChange = (e) => {

        setValue(e.target.value)
    }
    return (
        <>
            <form className="filter__search-container">
                <input className="filter__search-input" type="text"
                    name="filter"
                    value={value}
                    onChange={handleChange} placeholder="Search something" />
                <i className="search fas fa-search"></i>
            </form>

            <button className="btn btn-reset">
                <i className="fas fa-redo icon" />
                <span className="btn-text">reset</span>
            </button>
        </>
    )
}
