import { Mascota } from "../types"
import { Link } from "react-router-dom"

interface MascotasContainerProps {
    mascotas: Mascota[]
}

const MascotasContainer = ({ mascotas }: MascotasContainerProps) => {

    return (
            <div>
                {mascotas?.map(m => (
                    <div key={m.id} className='bg-blue-100 rounded-2xl p-2 w-[500px] m-auto '>
                        <h3>{m.nombre}</h3>
                        <span>Edad:{m.edad} años Sexo:{m.sexo} Peso: {m.peso} Kg</span>
                        <Link to={`/mascota/${m.id}`} >Detalle </Link>
                    </div>
                ))
                }
            </div>
    )

}

export default MascotasContainer;