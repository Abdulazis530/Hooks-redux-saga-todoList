import React from 'react'
import SearchBox from '../containers/SearchBox'
import TodoList from '../containers/TodoList'
import Header from './Header'
import FilterBox from '../containers/FilterBox'
import AddButton from './AddButton'
export default function Home() {
    return (
        <div>
            <Header >
                <h1 className="header-title">  Welcome to todo apps</h1>
                <SearchBox />
                <FilterBox />
                <AddButton />
            </Header>
            <TodoList />
        </div>
    )
}
