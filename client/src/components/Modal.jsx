import 'src/assets/styles/modal.css'

export default function Modal({ isOpen, onClose, title, children, footer }) {

    if (!isOpen) return null

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <header className="modal-header">
                    <h3>{title}</h3>
                    <button onClick={onClose} type="button" className="close-icon" aria-label='Fermer'>
                        <span className="material-symbols-rounded">close</span>
                    </button>
                </header>
                <div className="modal-body">
                    {children}
                </div>
                {footer && (
                    <footer className="modal-footer">
                        {footer}
                    </footer>
                )}
            </div>
        </div>
    )

}