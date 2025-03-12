import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMascotaById } from '../api/mascota'
import { Mascota } from '../types'

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
        <div className=' flex flex-col gap-1 font-semibold px-5 items-center'>
            <h1>{mascota.nombre}</h1>
            <div>
                <span>Edad: {mascota.edad} años</span>
                <span> {mascota.peso} KG </span>
                <span> {mascota.sexo} </span>
            </div>

            <span> {mascota.datosMedicos} </span>

            <h5 className='text-2xl'>Datos del Dueño</h5>
            <div>
                <span>Email: {mascota.dueño.email} </span>
                <span>Nombre: {mascota.dueño.nombre} </span>
                <span>Apellido: {mascota.dueño.apellido} </span>
                <span>Celular: {mascota.dueño.telefono} </span>
            </div>
        </div>
    )
}

export default MascotaDetail