import { AxiosResponse } from 'axios'
import axios from '../api/axios'
import { Mascota } from '../types'

export const getMascotasByUserId = async (id: string): Promise<Mascota[]> => {
    try {
        const response = await axios.get(`mascotas/${id}`)
        return response.data
    } catch (error) {
        console.error("no se pudieron obtener las mascotas")
        throw error
    }
}

export const getMascotaById = async (id: string): Promise<Mascota[]> => {
    try {
        const response = await axios.get(`mascota/${id}`)
        return response.data
    } catch (error) {
        console.error("no se pudo obtener la mascota")
        throw error
    }
}

export const deleteMascotaById = async (id: string): Promise<AxiosResponse<string>> => {
    try {
        const response = await axios.delete(`mascota/delete/${id}`)
        return response
    } catch (error) {
        console.error("No se pudo eliminar la mascota")
        throw error
    }
}

export const addMascota = async (mascota: FormData): Promise<AxiosResponse> => {
    try {
        const response = await axios.post('mascota', mascota, {
            headers:{
                "Content-Type":"multipart/form-data"
            }
        })
        return response
    } catch (error) {
        console.error("no se pudo generar la mascota")
        throw error
    }
}