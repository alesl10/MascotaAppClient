import { useState } from "react"
import { deleteMascotaById } from "../api/mascota"
import { Mascota } from "../types"
import { Link } from "react-router-dom"
import { MdDelete, MdEdit } from "react-icons/md"
import Swal from "sweetalert2"

interface MascotasContainerProps {
    mascotas: Mascota[]
}

const MascotasContainer = ({ mascotas: mascotasIniciales }: MascotasContainerProps) => {

    const [mascotas, setMascotas] = useState<Mascota[]>(mascotasIniciales)

    const deleteMascota = async (mascota: Mascota) => {
        const result = await Swal.fire({
            title: "¿Está seguro de que quiere eliminar la mascota?",
            text: "¡Esta acción es irreversible!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, Eliminar"
        });

        if (result.isConfirmed) {
            const response = await deleteMascotaById(mascota.id.toString());
            console.log(response);

            if (response.status >= 200 && response.status <= 300) {
                Swal.fire({
                    title: "Eliminada!",
                    text: "Su mascota fue eliminada",
                    icon: "success"
                });


                setMascotas((prevMascotas) => prevMascotas.filter(m => m.id !== mascota.id));
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "Hubo un problema al eliminar la mascota.",
                    icon: "error"
                });
            }
        }
    };

    return (
        <div className="flex flex-wrap justify-center gap-4 container">
            {mascotas?.map(m => (

                <div key={m.id} className="flex flex-col justify-center items-center cursor-pointer group relative">
                    <Link to={`/mascota/${m.id}`}>
                        <div className="w-[200px] h-[200px] m-auto rounded-full border border-primary/10  sombra hover:shadow-2xl transition-all   group-hover:opacity-10" style={{ backgroundImage: `url('http://localhost:8080${m.foto}')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                        </div>
                    </Link>
                    <div className="flex  absolute right-0 bottom-10">
                        <MdEdit className="text-yellow-600 size-6 hover:scale-130" />
                        <MdDelete onClick={() => deleteMascota(m)} className="text-red-700 size-6 hover:scale-130" />
                    </div>
                    <span className="text-3xl font-semibold text-primary ">{m.nombre}</span>
                    <Link to={`/mascota/${m.id}`} className="flex flex-col items-center opacity-0 absolute group-hover:opacity-100">
                        <span className="text-xl font-bold text-primary">Edad:{m.edad} años </span>
                        <span className="text-xl font-bold text-primary"> Sexo:{m.sexo}</span>
                        <span className="text-xl font-bold text-primary"> Peso: {m.peso.toString()} Kg</span>
                    </Link>
                </div>
            ))
            }
        </div>
    )

}

export default MascotasContainer;