import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {

    return (
        <div className="flex flex-col flex-1 bg-secondary/50 shadow-sm">

            <Header />

            <main className="flex-1">
                <Outlet />
            </main>

            <Footer/>
        </div>
    )
}

export default Layout