import { useForm, SubmitHandler } from 'react-hook-form'
import { Usuario } from '../types'
import { createUser } from '../api/usuario'


const Register = () => {
    const { register, handleSubmit } = useForm<Usuario>()
    const onSubmit: SubmitHandler<Usuario> = async (data) => {
        try {
            const formData = new FormData()

            formData.append("nombre", data.nombre)
            formData.append("usuario", data.usuario)
            formData.append("contrasena", data.contraseña)
            formData.append("apellido", data.apellido)
            formData.append("email", data.email)
            formData.append("direccion", data.direccion)
            formData.append("provincia", data.provincia)
            formData.append("pais", data.pais)
            formData.append("localidad", data.localidad)
            formData.append("codigoPostal", data.codigoPostal)
            formData.append("telefono", data.telefono)
               // Verificar si hay una foto seleccionada
               if (data.avatar && data.avatar[0]) {
                formData.append("avatar", data.avatar[0]);
            }
    
            console.log(formData)
            const response = await createUser(formData)
            console.log(response)
            alert("usuario registrado con exito")
        } catch (error) {
            console.error("Hubo un error al registrar")
            alert("No se pudo registrar")
        }
    }

    return (
        <main className='flex justify-center items-center flex-1'>
            <div className='bg-amber-200 border-3 min-w-[500px] border-blue-400 p-6 rounded-xl'>
                <h4 className='text-xl text-blue-700 font-bold'>Registro de Usuario</h4>
                <form className="flex flex-col gap-2 my-5 text-xl font-semibold" onSubmit={handleSubmit(onSubmit)}>

                    <div className=' flex gap-2'>
                        <input
                            className='bg-white rounded-md px-2 py-1'
                            placeholder="Usuario"
                            {...register("usuario", { required: true })}
                        />

                        <input
                            className='bg-white rounded-md px-2 py-1'
                            type="password"
                            placeholder="Contraseña"
                            {...register("contraseña", { required: true })}
                        />

                        <input
                            type='file'
                            className='bg-white rounded-md px-2 py-1'
                            placeholder="Avatar"
                            {...register("avatar")}
                        />
                    </div>
                    <div className=' flex gap-2'>

                        <input
                            className='bg-white rounded-md px-2 py-1'
                            placeholder="Nombre"
                            {...register("nombre", { required: true })}
                        />

                        <input
                            className='bg-white rounded-md px-2 py-1'
                            placeholder="Apellido"
                            {...register("apellido", { required: true })}
                        />

                        <input
                            className='bg-white rounded-md px-2 py-1'
                            placeholder="Email"
                            type="email"
                            {...register("email", { required: true })}
                        />
                    </div>

                    <div className=' flex gap-2'>
                        <input
                            className='bg-white rounded-md px-2 py-1'
                            placeholder="Dirección"
                            {...register("direccion", { required: true })}
                        />

                        <input
                            className='bg-white rounded-md px-2 py-1'
                            placeholder="Provincia"
                            {...register("provincia", { required: true })}
                        />
                        <input
                            className='bg-white rounded-md px-2 py-1'
                            placeholder="País"
                            {...register("pais", { required: true })}
                        />
                    </div>

                    <div className=' flex gap-2'>
                        <input
                            className='bg-white rounded-md px-2 py-1'
                            placeholder="Localidad"
                            {...register("localidad", { required: true })}
                        />

                        <input
                            className='bg-white rounded-md px-2 py-1'
                            placeholder="Código Postal"
                            {...register("codigoPostal", { required: true })}
                        />

                        <input
                            className='bg-white rounded-md px-2 py-1'
                            placeholder="Teléfono"
                            {...register("telefono", { required: true })}
                        />

                    </div>

                    <button type='submit' className="m-auto">Registrar</button>
                </form>
            </div>
        </main>
    )
}

export default Register