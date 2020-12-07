import React from 'react'
import ReactDOM from 'react-dom'

export default function Modal(props) {
    const { isOpen, onClose, children } = props
    if (!isOpen) return null

    return ReactDOM.createPortal(
        <>
            <div className="overlay"></div>
            <div className="modal">
                <h2 className="modal__title">{props.isEdit ? "EDIT TODO" : "ADD A NEW TODO"}</h2>
                <button className="btn modal__close" onClick={onClose}>
                    <i className="modal__close-icon far fa-times-circle fa-2x"></i>
                </button>

                <div className="modal__body">
                    {children}
                </div>
            </div>

        </>,
        document.getElementById('portal')
    )
}