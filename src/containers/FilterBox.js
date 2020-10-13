import React from 'react'
import 'react-dropdown/style.css';
export default function FilterBox() {

    return (
        <div className="filter-box">
            <div className="status-box">
                <label>Status :</label>
                <select className="status">
                    <option defaultValue>All</option>
                    <option>Incomplete</option>
                    <option>Complete</option>
                </select>
            </div>

            <div className="category-box">
                <label>Category Todo :</label>
                <select className="category">
                    <option defaultValue="FRONT_END">Frontend developer</option>
                    <option value="BACK_END">Backend developer</option>
                </select>
            </div>
        </div>
    )
}


