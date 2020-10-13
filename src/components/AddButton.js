import React from 'react'
import { Link } from 'react-router-dom'

export default function AddButton() {
    return (
        <Link to="/addtodo" className="add-todo">
            <i className="fas fa-plus fa-2x"></i>
        </Link>


    )
}
