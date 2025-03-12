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
        <div className='bg-amber-200 border-3 min-w-[500px] border-blue-400 p-6 rounded-xl'>
            <h4 className='text-xl text-blue-700 font-bold'>Iniciar Sesión</h4>
            <form className="flex flex-col gap-2 my-5" onSubmit={handleSubmit(onSubmit)}>
                <input className=' bg-white rounded-md' defaultValue="Username" {...register("usuario", { required: true })} />
                {errors.usuario && <span className='text-red-500'>Este campo es obligatorio</span>}

                <input className=' bg-white rounded-md' type='password' defaultValue="*****" {...register("contraseña", { required: true })} />
                {errors.contraseña && <span className='text-red-500'>Este campo es obligatorio</span>}
                <div className='flex gap-2 justify-center'>
                    <button type='submit'>Iniciar</button>
                    <Link to={'/register'}><button>Registrarse</button></Link>
                </div>
            </form>
        </div>

    )
}

export default LoginComponent