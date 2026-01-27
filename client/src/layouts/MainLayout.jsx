import { Outlet } from "react-router-dom"
import Navigation from "../components/Navigation.jsx"

export default function MainLayout() {

    return (
        <div className="layout">
            <Navigation />
            <main>
                <Outlet />
            </main>
        </div>
    )

}