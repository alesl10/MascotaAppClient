import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {

    return (
        <div className="flex flex-col flex-1 bg-fondo shadow-sm">

            <Header />

            <main className="flex-1">
                <Outlet />
            </main>

            <footer className=" text-primary text-center font-semibold ">
                © 2025 - Huella Digital - Todos los derechos reservados
            </footer>
        </div>
    )
}

export default Layout