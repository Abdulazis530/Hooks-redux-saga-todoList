import React from 'react'
import ReactDOM from 'react-dom'
import AddForm from "./AddForm"

export default function Modal({ isOpen, onClose }) {

    if (!isOpen) return null

    return ReactDOM.createPortal(
        <>
            <div className="overlay"></div>
            <div className="modal">
                <h2 className="modal__title">ADD NEW TODO</h2>
                <button className="btn modal__close" onClick={onClose}>
                    <i className="modal__close-icon far fa-times-circle fa-2x"></i>
                </button>

                <div className="modal__body">
                    <AddForm onClose={onClose} />
                </div>
            </div>

        </>,
        document.getElementById('portal')
    )
}