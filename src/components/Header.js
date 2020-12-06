import React, { useState } from 'react'
import Modal from './Modals'
import Navbar from './Navbar'
import SearchInput from './SearchInput'
import TodoCategory from './TodoCategory'

export default function Header() {
    const [openModal, setOpenModal] = useState(false)
    return (
        <header className="header">
            <Navbar />
            <div className="header__container">
                <div className="filter">
                    <SearchInput />
                </div>
                <TodoCategory />
                <button className="btn btn-add" onClick={() => setOpenModal(true)}>
                    <i className="fas fa-plus fa-2x"></i>
                </button>
                <Modal isOpen={openModal} onClose={() => setOpenModal(false)} />
            </div>
        </header>
    )
}
