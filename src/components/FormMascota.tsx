import { useForm, SubmitHandler } from 'react-hook-form'
import { Mascota } from '../types'
import { addMascota } from '../api/mascota'
import { useAuth } from '../context/AuthContext'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'


const FormMascota = () => {
    const navigate = useNavigate()
    const { user } = useAuth()
    const { register, handleSubmit } = useForm<Mascota>()
    const onSubmit: SubmitHandler<Mascota> = async (data) => {
        try {
            const formData = new FormData();

            // Agregar los campos al FormData
            formData.append("nombre", data.nombre);
            formData.append("edad", data.edad.toString());
            formData.append("sexo", data.sexo);
            formData.append("peso", data.peso.toString());
            formData.append("datosMedicos", data.datosMedicos);

            // Agregar el ID del usuario si existe
            if (user?.userId) {
                formData.append("usuario_id", user.userId.toString());
            }

            // Verificar si hay una foto seleccionada
            if (data.foto && data.foto[0]) {
                formData.append("foto", data.foto[0]);
            }

            console.log("Datos enviados:", formData);

            // Llamar a la API
            const response = await addMascota(formData);
            console.log(response)
            Swal.fire({
                title: "Mascota agregada! ",
                icon: "success",
                draggable: true
            });
            navigate('/home')

        } catch (error: any) {
            console.error("Hubo un error al registrar la mascota", error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.message || 'No se pudo Agregar a la mascota',
            });
        }
    };

    return (

        <form className="flex flex-col gap-4 my-5 text-xl font-semibold " onSubmit={handleSubmit(onSubmit)}
            style={{
                backgroundImage: `url('/perroRegistro.png')`, backgroundSize: 'contain', backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat'
            }}>

            <h4 className='text-4xl text-primary text-center font-bold'>Registro de Mascotas</h4>

            <div className=' flex gap-2 w-full'>
                <input
                    className='rounded-md px-2 py-1 w-1/2 text-primary bg-white/80 border border-primary/20'
                    placeholder="nombre"
                    {...register("nombre", { required: true })}
                />
                <input
                    className='rounded-md px-2 py-1 w-1/2 text-primary bg-white/80 border border-primary/20'
                    placeholder="edad"
                    {...register("edad", { required: true })}
                />

            </div>
            <div className=' flex gap-2 w-full'>
                <input
                    className='rounded-md px-2 py-1 w-1/2 text-primary bg-white/80 border border-primary/20'
                    type="text"
                    placeholder="sexo"
                    {...register("sexo", { required: true })}
                />

                <input
                    className='rounded-md px-2 py-1 w-1/2 text-primary bg-white/80 border border-primary/20'
                    placeholder="peso"
                    {...register("peso", { required: true })}
                />
            </div>
            <div className=' flex gap-2 w-full'>
                <input
                    className='rounded-md px-2 py-1 w-1/2 text-primary bg-white/80 border border-primary/20'
                    placeholder="datosMedicos"
                    {...register("datosMedicos", { required: true })}
                />

                <input
                    className='rounded-md px-2 py-1 w-1/2 text-primary bg-white/80 border border-primary/20'
                    placeholder="foto"
                    type="file"
                    {...register("foto")}
                />
            </div>

            <button type='submit' className="bg-primary/70 rounded-2xl text-fondo">Agregar</button>
        </form>
    )
}

export default FormMascota