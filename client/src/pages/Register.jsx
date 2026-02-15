import { useState } from 'react'

import 'src/assets/styles/form.css'
import Modal from 'src/components/Modal'

export default function Register() {

    const [showConfirmModal, setShowConfirmModal] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState('')

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: ''
    })

    const [touched, setTouched] = useState({
        firstname: false,
        lastname: false,
        username: false,
        email: false,
        password: false,
        confirmPassword: false
    })

    const handleChange = (e) => {
        let value = e.target.value
        if (e.target.name === 'username' || e.target.name === 'email' || e.target.name === 'password') value = value.replace(/\s/g, '')
        if (e.target.name === 'email') value = value.toLowerCase().trim()
        setFormData({ ...formData, [e.target.name]: value })
    }

    const handleConfirmPassword = (e) => {
        let value = e.target.value
        if (e.target.name === 'confirmPassword') value = value.replace(/\s/g, '')
        setConfirmPassword(value)
    }

    const handleBlur = (e) => {
        setTouched({ ...touched, [e.target.name]: true })
    }

    const handlePreSubmit = (e) => {
        e.preventDefault()
        setShowConfirmModal(true)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('https://localhost:3000/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })
            const data = await response.json()
            if (response.ok) alert("Inscription réussie ! Un mail d'activation vous a été envoyé.")
            else alert(data.message || "Erreur lors de l'inscription")
        } catch (error) {
            console.error("Erreur réseau :", error)
        }
        setShowConfirmModal(false)
    }

    return (

        <>

            <form className='form-container register' method="post" onSubmit={handlePreSubmit}>
                <div className="input-container firstname">
                    <label htmlFor="firstname">Prénom</label>
                    <input onChange={handleChange} onBlur={handleBlur} value={formData.firstname} data-touched={touched.firstname} required type="text" name="firstname" id="firstname" placeholder='' />
                    <span className="error-icon material-symbols-rounded">warning</span>
                    <div className="error-message">Le prénom est requis.</div>
                </div>
                <div className="input-container lastname">
                    <label htmlFor="lastname">Nom</label>
                    <input onChange={handleChange} onBlur={handleBlur} value={formData.lastname} data-touched={touched.lastname} required type="text" name="lastname" id="lastname" placeholder='' />
                    <span className="error-icon material-symbols-rounded">warning</span>
                    <div className="error-message">Le nom est requis.</div>
                </div>
                <div className="input-container username">
                    <label htmlFor="username">Pseudo</label>
                    <input onChange={handleChange} onBlur={handleBlur} value={formData.username} data-touched={touched.username} required minLength={3} maxLength={12} pattern='^[a-zA-Z0-9_-]+$' type="text" name="username" id="username" placeholder='' />
                    <span className="error-icon material-symbols-rounded">warning</span>
                    <div className="error-message">Le pseudo doit contenir entre 3 et 12 caractères (lettres, chiffres, tirets ou underscore).</div>
                </div>
                <div className="input-container email">
                    <label htmlFor="email">Adresse mail</label>
                    <input onChange={handleChange} onBlur={handleBlur} value={formData.email} data-touched={touched.email} required pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$' type="email" name="email" id="email" placeholder='' />
                    <span className="error-icon material-symbols-rounded">warning</span>
                    <div className="error-message">Veuillez entrer une adresse mail valide (ex: contact@domaine.fr).</div>
                </div>
                <div className="input-container password">
                    <label htmlFor="password">Mot de passe</label>
                    <input onChange={handleChange} onBlur={handleBlur} value={formData.password} data-touched={touched.password} required minLength={12} pattern='^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_])(?!.*\s).{12,}$' type="password" name="password" id="password" placeholder='' />
                    <span className="error-icon material-symbols-rounded">warning</span>
                    <div className="error-message">Le mot de passe doit contenir au moins 12 caractères (majuscule, minuscule, chiffre et caractère spécial).</div>
                </div>
                <div className="buttons">
                    <button type='button' aria-label='Annuler'>
                        <span className="icon-button material-symbols-rounded">close</span>
                        <span className="label-button">Annuler</span>
                    </button>
                    <button type='submit'>
                        <span className="icon-button material-symbols-rounded">check</span>
                        <span className="label-button-mobile">Poursuivre</span>
                        <span className="label-button-desktop">Poursuivre l'inscription</span>
                    </button>
                </div>
            </form>

            <div className="navigation link-login">
                <p>Vous avez déjà un compte ?</p>
                <button type="button">Se connecter</button>
            </div>

            <Modal
                isOpen={showConfirmModal}
                title="Mot de passe"
                onClose={() => setShowConfirmModal(false)}
                footer={
                    <div className='buttons'>
                        <button onClick={() => setShowConfirmModal(false)} type='button' aria-label='Annuler'>
                            <span className="icon-button material-symbols-rounded">close</span>
                            <span className="label-button">Annuler</span>
                        </button>
                        <button onClick={handleSubmit} type="submit">
                            <span className="icon-button material-symbols-rounded">check</span>
                            <span className="label-button-mobile">Confirmer</span>
                            <span className="label-button-desktop">Confirmer l'inscription</span>
                        </button>
                    </div>
                }
            >
                <p className='label-mobile'>Mot de passe</p>
                <p className='label-desktop'>Saisissez votre mot de passe une seconde fois</p>
                <div className="modal-input">
                    <input onChange={handleConfirmPassword} onBlur={handleBlur} value={confirmPassword} data-touched={touched.confirmPassword} required minLength={12} pattern='^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_])(?!.*\s).{12,}$' type="password" name="confirmPassword" placeholder='' />
                    <span className="error-icon material-symbols-rounded">warning</span>
                    <div className="error-message">Le mot de passe doit contenir au moins 12 caractères (majuscule, minuscule, chiffre et caractère spécial).</div>
                </div>
            </Modal>
        
        </>

    )

}