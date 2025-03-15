import { useState } from "react"
import LoginComponent from "../components/LoginComponent"
import { Link } from "react-router-dom"
import Footer from "@/components/Footer"
import { Contacto } from "./Contacto"

export const Login = () => {

  const [loginVisible, setLoginVisible] = useState<boolean>(false)

  return (
    <div className='flex flex-col gap-20 w-full bg-secondary/10 '>

      <section className="w-full h-svh  top-0 p-10 flex justify-between " style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 70%, rgba(255, 255, 255, 1)), url('/banner.jpg')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center 20%' }} >
        <div className="">
          <h1 className=" text-primary text-8xl  sombra-texto ">Huellita Digital</h1>
          <span className="px-2 text-3xl bg-primary rounded-sm text-secondary sombra-texto-claro">No pierdas nunca un amigo</span>
        </div>
        <div className="flex gap-2 items-end">
          <button onClick={() => setLoginVisible(!loginVisible)} className="bg-primary rounded-3xl text-2xl text-secondary">Iniciar Sesión</button>
          <Link to={'/register'}><button className="bg-primary rounded-3xl text-2xl text-secondary">Registrase</button></Link>
        </div>
        <div className={`${loginVisible ? 'opacity-100' : ' opacity-0'} flex bottom-20 absolute transition-all duration-200`}>
          <LoginComponent />
        </div>
      </section>

      {/* // segunda seccion */}
      <section className=" container flex items-center justify-center  m-auto relative ">
        <h2 className="text-[9rem] font-bold text-primary/50  absolute -top-10">SERVICIOS</h2>

        <img src="/gatoSinFondo.png" alt="" className="w-1/2 sombra top-0 " />

        <div className="flex  gap-10  justify-end flex-wrap">
          <div className="flex items-center flex-col ">
            <img src="/adopcion.png" alt="" className="size-30 sombra" />
            <span className="font-semibold text-primary">Adopción</span>
          </div>
          <div className="flex items-center flex-col ">
            <img src="/perdido.png" alt="" className="size-30 sombra" />
            <span className="font-semibold text-primary">Mascotas Perdidas</span>
          </div>
          <div className="flex items-center flex-col ">
            <img src="/qr.png" alt="" className="size-30 sombra" />
            <span className="font-semibold text-primary">Generador de QR</span>
          </div>
        </div>

      </section>
      <Footer />
    </div>
  )
}
