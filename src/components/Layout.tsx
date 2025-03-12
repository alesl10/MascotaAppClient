import { Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Layout = () => {
    const { user , logout} = useAuth();

    return (
        <div className="flex flex-col min-h-svh">
            {/* Navbar o encabezado */}
            <header className="bg-amber-100 py-4 font-semibold">
                <h1 className="text-center">Mis mascotas</h1>

                <div className="flex px-10 justify-end gap-4">
                    <h5>Usuario: {user?.usuario}</h5>
                    <span onClick={logout} className=" cursor-pointer text-red-600 font-semibold">Salir</span>
                </div>
            </header>

            <main className="flex-1">
                <Outlet />  {/* Renderiza la página actual */}
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-center text-white">
                © 2025 - Creado por Lopez Alexis
            </footer>
        </div>
    )
}

export default Layout