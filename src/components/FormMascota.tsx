import { useForm, SubmitHandler } from 'react-hook-form'
import { Mascota } from '../types'
import { addMascota } from '../api/mascota'
import { useAuth } from '../context/AuthContext'


const FormMascota = () => {
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
            console.log("Respuesta del servidor:", response);
            alert("Mascota agregada con éxito");
    
        } catch (error) {
            console.error("Hubo un error al registrar la mascota", error);
            alert("No se pudo registrar la mascota");
        }
    };

    return (

                <form className="flex flex-col gap-2 my-5 text-xl font-semibold" onSubmit={handleSubmit(onSubmit)}>

                    <div className=' flex gap-2'>
                        <input
                            className='bg-white rounded-md px-2 py-1'
                            placeholder="nombre"
                            {...register("nombre", { required: true })}
                        />
                        <input
                            className='bg-white rounded-md px-2 py-1'
                            placeholder="edad"
                            {...register("edad", { required: true })}
                        />

                        <input
                            className='bg-white rounded-md px-2 py-1'
                            type="text"
                            placeholder="sexo"
                            {...register("sexo", { required: true })}
                        />
                    </div>
                    <div className=' flex gap-2'>

                        <input
                            className='bg-white rounded-md px-2 py-1'
                            placeholder="peso"
                            {...register("peso", { required: true })}
                        />

                        <input
                            className='bg-white rounded-md px-2 py-1'
                            placeholder="datosMedicos"
                            {...register("datosMedicos", { required: true })}
                        />

                        <input
                            className='bg-white rounded-md px-2 py-1'
                            placeholder="foto"
                            type="file"
                            {...register("foto")}
                        />
                    </div>

                    <button type='submit' className="m-auto">Agregar</button>
                </form>
    )
}

export default FormMascota