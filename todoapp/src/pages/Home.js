import React from 'react'
import Header from '../components/Header'
import TodoList from '../containers/TodoList'
export default function Home() {
    return (
        <>
            <Header />
            <section className="todo">
                <TodoList />
            </section>
        </>
    )
}
