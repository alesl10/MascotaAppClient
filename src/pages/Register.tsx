import Footer from "@/components/Footer"
import FormUsuario from "../components/FormUsuario"

export const Register = () => {

  return (
    <div className='flex flex-col flex-1 gap-5 bg- shadow-sm'>
      <div className="mx-auto">
        <h1 className=" text-primary text-5xl font-bold sombra-texto ">Huellita Digital</h1>
        <span className="px-2 text-2xl bg-primary rounded-sm text-secondary sombra-texto-claro">No pierdas nunca un amigo</span>
      </div>
      <img
        src="/gatoInicio.png"
        alt=""
        className="fixed bottom-0 left-0 z-20 gato-grande 
                 w-1/3 max-w-[700px] min-w-[200px] 
                 md:w-1/4 lg:w-1/3 
                 transition-all duration-300"
      />
      <FormUsuario />
      <Footer />
    </div>
  )
}
