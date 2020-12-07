import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadTodo } from '../actions';


export default function SearchInput() {
    const dispatch = useDispatch()
    const [value, setValue] = useState("")

    useEffect(() => {
        if (value) dispatch(loadTodo(value))
        else
            dispatch(loadTodo("ALL"))
    }, [value])

    const handleChange = (e) => {
        setValue(e.target.value)
    }
    return (
        <form className="filter__search-container">
            <input className="filter__search-input" type="text"
                name="filter"
                value={value}
                onChange={handleChange} placeholder="Search something" />
            <i className="search fas fa-search"></i>
        </form>
    )
}
