import LoginComponent from "../components/LoginComponent"

export const Login = () => {
  return (
    <div className='flex flex-col justify-center flex-1 gap-5 bg-fondo shadow-sm'>
      <div className="m-auto">
        <h1 className=" text-primary text-9xl font-bold sombra-texto ">Huellita Digital</h1>
        <span className="px-2 text-4xl bg-primary rounded-sm text-[#B9B28A] sombra-texto-claro">No pierdas nunca un amigo</span>
      </div>
      <img
        src="/gatoInicio.png"
        alt=""
        className="absolute bottom-0 left-0 z-20 gato-grande 
                 w-1/3 max-w-[700px] min-w-[200px] 
                 md:w-1/4 lg:w-1/3 
                 transition-all duration-300"
      />
      <LoginComponent />
    </div>
  )
}
