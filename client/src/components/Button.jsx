export default function Button({ type = "button", label, onClick }) {

    const labels = {
        cancel: { icon: 'close', mobile: 'Annuler', desktop: 'Annuler' },
        register: { icon: 'check', mobile: 'Poursuivre', desktop: "Poursuivre l'inscription" },
        confirm: { icon: 'check', mobile: 'Confirmer', desktop: "Confirmer l'inscription" }
    }

    return (
        <button type={type} aria-label={label} onClick={onClick}>
            <span className="icon-button material-symbols-rounded">{labels[label].icon}</span>
            <span className="label-button mobile">{labels[label].mobile}</span>
            <span className="label-button desktop">{labels[label].desktop}</span>
        </button>
    )

}