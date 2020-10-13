import React, { useState } from 'react'

export default function TodoItem({ title, content, category, completed }) {

    return (
        <div className="todo-item">
            <div className="content">
                <h2>{title}</h2>
                <span className={`${category}-badge`}>{category}</span>
                <p>{content}</p>
            </div>
            <div className="button-container">
                <button className="button-delete">Delete</button>
                <button className="button-edit">Edit</button>
                {completed ?
                    <button className="button-uncomplete">Uncomplete</button>
                    :
                    <button className="button-complete">Complete</button>
                }
            </div>

        </div >
    )
}
