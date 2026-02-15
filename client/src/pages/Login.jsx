import logo from 'src/assets/images/cv-manager.png'

export default function Login() {

    return (
        <>
        
            <div className="form-container">

                <header className="form-header">
                    <img src={logo} alt="Logo de l'application" />
                </header>

                <form method="post" className="login">
                    <div className="identifier">
                        <label htmlFor="identifier">Identifiant</label>
                        <input type="text" name="identifier" id="identifier" />
                    </div>
                    <div className="password">
                        <label htmlFor="password">Mot de passe</label>
                        <input type="password" name="password" id="password" minLength={12} />
                    </div>
                    <div className="buttons">
                        <button type="button">Annuler</button>
                        <button type="submit">Se connecter</button>
                    </div>
                </form>

                <div className="form-link">
                    <p>Vous n'êtes pas inscrit ?</p>
                    <button type="button">S'inscrire</button>
                </div>

                <footer className="form-footer">
                    <p>© 2026 CV Manager</p>
                    <p>La solution intelligente pour vos candidatures.</p>
                </footer>

            </div>
        
        </>
    )

}