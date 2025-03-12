import { Mascota, Usuario } from '../types'
import axios from './axios'

type LoginData = Pick<Usuario, 'usuario' | 'contraseña'>;

export const getUsuarios = async (): Promise<Mascota[]> => {
    try {
        const response = await axios.get<Mascota[]>('mascotas/1')
        return response.data
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const createUser = async (usuario: Usuario): Promise<string> => {
    try {
        const response = await axios.post('usuario', usuario)
        return response.data
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const login = async (usuario: LoginData): Promise<string> => {
    try {
        const response = await axios.post('login', usuario)
        return response.data
    } catch (error) {
        console.log(error)
        throw error
    }
}