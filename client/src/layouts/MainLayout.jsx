import { Outlet } from "react-router-dom"
import Navigation from "../components/Navigation.jsx"
import Header from "src/components/Header.jsx"
import Footer from "src/components/Footer.jsx"

export default function MainLayout({ variant, title }) {

    return (
        <div className="layout">
            <Header variant={variant} title={title} />
            <main>
                <Outlet />
            </main>
            <Footer variant={variant} />
        </div>
    )

}