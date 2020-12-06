import React, { useState } from 'react'
import Modal from './Modals'
import SearchInput from './SearchInput'

export default function Header() {
    const [openModal, setOpenModal] = useState(false)
    return (
        <header className="header">
            <h1 className="header__title">Welcome to todo Apps!</h1>
            <div className="filter">
                <SearchInput />
            </div>

            <button className="btn btn-add" onClick={() => setOpenModal(true)}>
                <i className="fas fa-plus fa-2x"></i>
            </button>
            <Modal isOpen={openModal} onClose={() => setOpenModal(false)} />
        </header>
    )
}
