import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadTodo } from '../actions'

export default function TodoCategory() {
    const { filter } = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const changeTypeTypeTodo = (type) => {
        dispatch(loadTodo(type))
    }
    return (
        <ul className="category">
            <li className="category__item" onClick={() => changeTypeTypeTodo("ALL")}>
                <p className={`category__item-text ${filter === "ALL" ? "active" : ""}`}>
                    All
            </p>
            </li>
            <li className="category__item" onClick={() => changeTypeTypeTodo("ACTIVE")}>
                <p className={`category__item-text ${filter === "ACTIVE" ? "active" : ""}`}>
                    Active
            </p>
            </li>
            <li className="category__item" onClick={() => changeTypeTypeTodo("COMPLETE")}>
                <p className={`category__item-text ${filter === "COMPLETE" ? "active" : ""}`} >
                    Complete
            </p>
            </li>
        </ul>
    )
}
