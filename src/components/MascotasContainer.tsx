import { useState } from "react"
import { deleteMascotaById } from "../api/mascota"
import { Mascota } from "../types"
import { Link } from "react-router-dom"

interface MascotasContainerProps {
    mascotas: Mascota[]
}

const MascotasContainer = ({ mascotas: mascotasIniciales }: MascotasContainerProps) => {

    const [mascotas, setMascotas] = useState<Mascota[]>(mascotasIniciales)

    const deleteMascota = async (mascota: Mascota) => {
        const response = await deleteMascotaById(mascota.id.toString())
        console.log(response)
        if (response.status >= 200 && response.status <= 300) {
            setMascotas((prevMascotas) => prevMascotas.filter(m => m.id !== mascota.id));
        }
    }

    return (
        <div className="flex flex-wrap gap-4 container">
            {mascotas?.map(m => (
                <div key={m.id} className='border-5 border-primary rounded-2xl p-2  flex flex-col justify-center items-center '>
                    <div className="w-[200px] h-[250px] m-auto " style={{ backgroundImage: `url('/gatoPerfil.jpg')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                    </div>
                    <span className="text-3xl font-semibold text-primary ">{m.nombre}</span>

                    <div>
                        <span className="text-xl font-medium">Edad:{m.edad} años Sexo:{m.sexo} Peso: {m.peso} Kg</span>
                    </div>
                    <Link className="text-xl font-medium" to={`/mascota/${m.id}`} >Detalle </Link>
                    <div className="flex gap-2">
                        <button >Editar</button>
                        <button onClick={() => deleteMascota(m)}>Elimnar</button>
                    </div>
                </div>
            ))
            }
        </div>
    )

}

export default MascotasContainer;