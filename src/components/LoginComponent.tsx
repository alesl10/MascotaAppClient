import { useForm, SubmitHandler } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { login } from '../api/usuario'
import { useAuth } from '../context/AuthContext'

interface Inputs {
    usuario: string,
    contraseña: string
}

const LoginComponent = () => {
    const { login: iniciarSesion } = useAuth()

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            const response = await login(data)
            console.log(response)
            iniciarSesion(response)
        } catch (error) {
            console.error("No se pudo iniciar sesión")
            alert("No se pudo iniciar sesión")
        }
    }

    return (

        <div className="bg-[#504B38] m-auto border-3 min-w-[600px]  border-gray-200 shadow-xl p-6 rounded-xl relative z-10">
            <h4 className="text-3xl text-[#F8F3D9] font-bold">Iniciar Sesión</h4>
            <form className="flex flex-col gap-3 my-5" onSubmit={handleSubmit(onSubmit)}>
                <input className="bg-white rounded-md text-2xl" placeholder="Usuario" {...register("usuario", { required: true })} />
                {errors.usuario && <span className="text-red-500">Este campo es oblig3torio</span>}

                <input className="bg-white rounded-md text-2xl" type="password" placeholder="Contraseña" {...register("contraseña", { required: true })} />
                {errors.contraseña && <span className="text-red-500">Este campo es obligatorio</span>}

                <div className="flex gap-2 justify-center">
                    <button type="submit" className='text-secondary'>Iniciar</button>
                    <Link to={'/register'}>
                        <button className='text-secondary'>Registrarse</button>
                    </Link>
                </div>
            </form>

            <img
                src="/imgSinFondo.png"
                className="absolute top-1/2 left-[570px] transform -translate-y-1/2  max-w-[115px] sombra"
                alt="Imagen de inicio"
            />
        </div>

    )
}

export default LoginComponent