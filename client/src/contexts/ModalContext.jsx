import { createContext, useContext, useState } from 'react'
import 'src/assets/styles/modal.css'

const ModalContext = createContext()

export function ModalProvider({ children }) {

    const [ config, setConfig ] = useState({ show: false, title: '', Component: null, props: {}, onSubmit: null, onClose: null})

    const openModal = (title, Component, props = {}, onSubmit = null, onClose = null) => {
        setConfig({ show: true, title, Component, props, onSubmit, onClose })
    }

    const closeModal = () => {
        if (config.onClose) config.onClose()
        setConfig(prev => ({ ...prev, show: false }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (config.onSubmit) config.onSubmit(e)
        closeModal()
    }

    const { Component, props } = config

    return (
        <ModalContext.Provider value={{ openModal, closeModal }}>
            {children}
            <div className={`modal-container${config.show ? ' show' : ''}`}>
                <div className="modal-content">
                    <header className="modal-header">
                        <h3>{config.title}</h3>
                    </header>
                    <form className="form-container modal-form" method='post' onSubmit={handleSubmit}>
                        {Component && <Component {...props} />}
                    </form>
                </div>
            </div>
        </ModalContext.Provider>
    )
}

export const useModal = () => useContext(ModalContext)