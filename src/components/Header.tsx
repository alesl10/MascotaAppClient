import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const Header = () => {
  const { user, logout } = useAuth()

  return (
    <header className=" p-5 flex items-center justify-between font-semibold">
      <Link to={'/'} className="flex items-end gap-2 cursor-pointer">
        <img src="/huella.png" className=" max-w-[150px] " alt="" />
        <div>
          <h1 className="text-6xl text-primary font-bold">Huella Digital</h1>
          <span className="px-2 text-xl bg-[#504B38] rounded-sm text-[#B9B28A] ">No pierdas nunca un amigo</span>
        </div>
      </Link>

      <div className="flex px-10 justify-end gap-4">
        <h5>Usuario: {user?.usuario}</h5>
        <span onClick={logout} className=" cursor-pointer text-red-600 font-semibold">Salir</span>
      </div>
    </header>
  )
}

export default Header