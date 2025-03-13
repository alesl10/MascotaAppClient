import { Usuario } from '../types'
import axios from './axios'

type LoginData = Pick<Usuario, 'usuario' | 'contraseña'>;


export const createUser = async (usuario: FormData): Promise<string> => {
    try {
        const response = await axios.post('usuario', usuario, {
            headers:{
                "Content-Type":"multipart/form-data"
            }
        })
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