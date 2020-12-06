import React from 'react'

export default function TodoCategory() {
    return (
        <ul className="category">
            <li className="category__item">
                <p className="category__item-text">
                    All
            </p>
            </li>
            <li className="category__item">
                <p className="category__item-text">
                    Active
            </p>
            </li>
            <li className="category__item">
                <p className="category__item-text">
                    Complete
            </p>
            </li>

        </ul>
    )
}
