import { Link, useLocation } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { useEffect } from "react"
import MenuNavBar from "./MenuNavBar"

const Header = () => {
  const { user, logout } = useAuth()
  const location = useLocation();
  const currentPath = location.pathname

  useEffect(() => {
    console.log(user)
  }, [user])

  return (
    <header className=" p-5 flex items-end justify-between font-semibold  shadow-md z-20">
      <Link to={'/'} className="flex items-end gap-2 cursor-pointer">
        <img src="/huella.png" className=" max-w-[70px] " alt="" />
        <div>
          <h1 className="text-4xl text-primary font-bold">Huellita Digital</h1>
          <span className="px-2 text-md bg-[#504B38] rounded-sm text-[#B9B28A] ">No pierdas nunca un amigo</span>
        </div>
      </Link>

      <div className="flex gap-6 ">
        <MenuNavBar link="home" title="Home" isActive={currentPath == "/home"} />
        <MenuNavBar link="mascotasperdidas" title="Mascotas perdidas" isActive={currentPath == "/mascotasperdidas"} />
        <MenuNavBar link="Adopcion" title="Adopcion" isActive={currentPath == "/Adopcion"} />
        <MenuNavBar link="contacto" title="Contacto" isActive={currentPath == "/contacto"} />
      </div>

      <div className="flex px-10 items-end text-xl gap-4">
        <h5 className="text-primary font-bold py-1"> {user?.usuario}</h5>
        <span onClick={logout} className=" rounded-4xl px-4 py-1 border-2 border-primary bg-primary/20 cursor-pointer text-red-600 font-semibold hover:saturate-150 hover:bg-primary/50 transition-all">Salir</span>
        <img src={`http://localhost:8080${user?.avatar}`} alt="Avatar usuario" className="rounded-full bg-white object-cover size-14" />
      </div>
    </header>
  )
}

export default Header