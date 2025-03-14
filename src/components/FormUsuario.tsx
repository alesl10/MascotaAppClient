import { useForm, SubmitHandler } from 'react-hook-form'
import { Usuario } from '../types'
import { createUser } from '../api/usuario'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const FormUsuario = () => {
const navigate = useNavigate()
    const { register, handleSubmit, reset } = useForm<Usuario>()
    const onSubmit: SubmitHandler<Usuario> = async (data) => {
        try {
            const formData = new FormData()

            formData.append("nombre", data.nombre)
            formData.append("usuario", data.usuario)
            formData.append("contrasena", data.contrasena)
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
            Swal.fire({
                title: "Usuario Registrado! ",
                icon: "success",
                draggable: true
              });
              navigate('/')
        } catch (error:any) {
            console.error("Hubo un error al registrar")
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.message || 'No se pudo registrar',
              });
        } finally {
            reset()
        }
    }


    return (
        <div className='container mx-auto  flex justify-center p-10 '>

            <form className="flex flex-col gap-2 my-5 text-xl font-semibold " onSubmit={handleSubmit(onSubmit)}>
                <div className='flex gap-2'>

                    <div className='flex flex-col gap-2 w-1/2'>

                        <label className=' text-primary'>Usuario</label>
                        <input
                            className='bg-white rounded-md px-2 py-1 '
                            placeholder="Usuario"
                            {...register("usuario", { required: true })}
                        />

                        <label className=' text-primary'>Contraseña</label>
                        <input
                            className='bg-white rounded-md px-2 py-1'
                            type="password"
                            placeholder="Contraseña"
                            {...register("contrasena", { required: true })}
                        />

                        <label className=' text-primary'>Nombre</label>
                        <input
                            className='bg-white rounded-md px-2 py-1'
                            placeholder="Nombre"
                            {...register("nombre", { required: true })}
                        />

                        <label className=' text-primary'>Apellido</label>
                        <input
                            className='bg-white rounded-md px-2 py-1'
                            placeholder="Apellido"
                            {...register("apellido", { required: true })}
                        />

                        <label className=' text-primary'>Email</label>
                        <input
                            className='bg-white rounded-md px-2 py-1'
                            placeholder="Email"
                            type="email"
                            {...register("email", { required: true })}
                        />

                        <label className=' text-primary'>Dirección</label>
                        <input
                            className='bg-white rounded-md px-2 py-1'
                            placeholder="Dirección"
                            {...register("direccion", { required: true })}
                        />
                    </div>

                    <div className='flex flex-col gap-2 w-1/2'>

                        <label className=' text-primary'>Provincia</label>
                        <input
                            className='bg-white rounded-md px-2 py-1'
                            placeholder="Provincia"
                            {...register("provincia", { required: true })}
                        />

                        <label className=' text-primary'>País</label>
                        <input
                            className='bg-white rounded-md px-2 py-1'
                            placeholder="País"
                            {...register("pais", { required: true })}
                        />

                        <label className=' text-primary'>Localidad</label>
                        <input
                            className='bg-white rounded-md px-2 py-1'
                            placeholder="Localidad"
                            {...register("localidad", { required: true })}
                        />

                        <label className=' text-primary'>Código Postal</label>
                        <input
                            className='bg-white rounded-md px-2 py-1'
                            placeholder="Código Postal"
                            {...register("codigoPostal", { required: true })}
                        />

                        <label className=' text-primary'>Telefono</label>
                        <input
                            className='bg-white rounded-md px-2 py-1'
                            placeholder="Teléfono"
                            {...register("telefono", { required: true })}
                        />

                        <label className=' text-primary'>Avatar</label>
                        <input
                            type='file'
                            className="bg-white h-full border border-gray-300 overflow-ellipsis overflow-hidden rounded-lg px-2"
                            {...register("avatar", { required: true })}
                        />
                    </div>
                </div>

                <div className='flex gap-2 justify-center'>
                    <button type='submit' className=" text-white">Registrar</button>
                    <button className='text-red-900'>Cancelar</button>
                </div>
            </form>
        </div>
    )
}

export default FormUsuario