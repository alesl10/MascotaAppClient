import { useForm, SubmitHandler } from 'react-hook-form'
import { login } from '../api/usuario'
import { useAuth } from '../context/AuthContext'
import { useState } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi'

interface Inputs {
    usuario: string,
    contrasena: string
}

const LoginComponent = () => {
    const { login: iniciarSesion } = useAuth()
    const [viewPassword, setViewPassword] = useState<boolean>(false)

    const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            const response = await login(data)
            console.log(response)
            iniciarSesion(response as string)
        } catch (error: any) {
            console.error("No se pudo iniciar sesión", error.message)
            alert(error.message)
        }
        finally {
            reset()
        }
    }

    return (

        <div className="bg-primary/80  border-3 min-w-[600px]  border-gray-200 shadow-xl p-6 rounded-xl relative z-10">
            <h4 className="text-3xl text-[#F8F3D9] font-bold">Iniciar Sesión</h4>
            <form className="flex flex-col gap-3 my-5" onSubmit={handleSubmit(onSubmit)}>
                <input className="bg-white rounded-md text-2xl px-2" placeholder="Usuario" {...register("usuario", { required: true })} />
                {errors.usuario && <span className="text-red-500">Este campo es obligatorio</span>}

                <div className='relative'>
                    <input className="bg-white w-full rounded-md text-2xl px-2" type={`${viewPassword ? 'text' : 'password'}`} placeholder="Contraseña" {...register("contrasena", { required: true })} />
                    {errors.contrasena && <span className="text-red-500">Este campo es obligatorio</span>}
                    <div
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer"
                        onClick={() => setViewPassword(!viewPassword)}
                    >
                        {viewPassword ? <FiEyeOff size={24} /> : <FiEye size={24} />}
                    </div>
                </div>

                <div className="flex gap-2 justify-center">
                    <button type="submit" className='text-primary bg-secondary rounded-2xl '>Iniciar</button>
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