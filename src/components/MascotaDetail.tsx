import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMascotaById } from '../api/mascota'
import { Mascota } from '../types'
import VolverBoton from './VolverBoton'

const MascotaDetail = () => {
    const { id } = useParams<{ id: string }>()
    const [mascota, setMascota] = useState<Mascota | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const fetchMascota = async () => {
        try {
            setLoading(true)
            const response = await getMascotaById(id!)
            setMascota(response[0])
        } catch (error) {
            setError('Error al obtener la mascota')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchMascota()
    }, [id])

    if (loading) return <div>Cargando...</div>
    if (error) return <div>{error}</div>
    if (!mascota) return <div>No se encontró la mascota</div>

    return (
        <div className=' flex font-semibold gap-10 p-10 items-start  h-full container m-auto justify-center rounded-md sombra bg-secondary/80 '>

            <div className='w-1/3'>
                <img src={`http://localhost:8080${mascota.foto}`} alt="" className='w-full object-cover object-top rounded-md sombra' />
            </div>

            <div className='flex flex-col justify-between  gap-10'>
                <div className='flex flex-col gap-1 text-xl'>
                    <h1 className='text-6xl font-bold text-primary'>{mascota.nombre}</h1>
                    <span>Edad: {mascota.edad} años</span>
                    <span> Peso: {mascota.peso} KG </span>
                    <span> Sexo: {mascota.sexo} </span>
                    <span> Datos medicos: {mascota.datosMedicos} </span>
                </div>

                <div className='flex flex-col gap-4'>
                    <div className='bg-primary/80 text-secondary rounded-md px-5'>
                        <h5 className='text-4xl'>Datos del Dueño</h5>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <span className='text-xl'>Email: {mascota.dueño.email} </span>
                        <span className='text-xl'>Nombre: {mascota.dueño.nombre} </span>
                        <span className='text-xl'>Apellido: {mascota.dueño.apellido} </span>
                        <span className='text-xl'>Celular: {mascota.dueño.telefono} </span>
                    </div>
                </div>
                <VolverBoton />
            </div>
        </div>
    )
}

export default MascotaDetail