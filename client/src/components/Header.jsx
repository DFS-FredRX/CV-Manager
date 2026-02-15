import { useLocation } from 'react-router-dom'
import logo from 'src/assets/images/cv-manager.png'

export default function Header({ variant }) {

    const titles = {
        '/login': 'Connectez-vous',
        '/register': 'Créez votre compte'
    }

    const location = useLocation()
    const title = titles[location.pathname] || 'Bienvenue'

    if (variant === 'none') return null

    return (
        <>
            {variant === 'auth' ? (
                <header className="form-header">
                    <img src={logo} alt="Logo de l'application" />
                    <h1>{title}</h1>
                </header>
            ) : (
                <header className="default-header"></header>
            )}
        </>
    )

}