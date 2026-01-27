import { Link } from "react-router-dom";

export default function Navigation() {

    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/about">A propos</Link>
        </nav>
    )

}