import axios from '../api/axios'

export const getMascotasByUserId = async (id: string) => {
    try {
        const response = await axios.get(`mascotas/${id}`)
        return response.data
    } catch (error) {
        console.error("no se pudieron obtener las mascotas")
        throw error
    }
}

export const getMascotaById = async (id: string) => {
    try {
        const response = await axios.get(`mascota/${id}`)
        return response.data
    } catch (error) {
        console.error("no se pudo obtener la mascota")
        throw error
    }
}