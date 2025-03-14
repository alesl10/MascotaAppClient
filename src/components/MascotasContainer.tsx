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
        <div className="flex flex-wrap justify-center gap-4 container">
            {mascotas?.map(m => (
                <div key={m.id} className='sombra shadow-lg border-primary/20 border  rounded-2xl w-[22rem] p-4  flex flex-col justify-center items-center hover:shadow-2xl transition-all'>
                    <div className="w-[200px] h-[250px] m-auto rounded-lg " style={{ backgroundImage: `url('http://localhost:8080${m.foto}')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize:'contain' }}>
                    </div>
                    <span className="text-3xl font-semibold text-primary ">{m.nombre}</span>

                    <div className="flex flex-col items-center">
                        <span className="text-xl font-medium">Edad:{m.edad} años </span>
                        <span className="text-xl font-medium"> Sexo:{m.sexo}</span>
                        <span className="text-xl font-medium"> Peso: {m.peso} Kg</span>
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