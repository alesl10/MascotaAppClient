import { Usuario } from '../types'
import axiosInstance from './axios'
import axios from 'axios';

type LoginData = Pick<Usuario, 'usuario' | 'contrasena'>;


export const createUser = async (usuario: FormData): Promise<string> => {
    try {
        const response = await axiosInstance.post('usuario', usuario, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        return response.data
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const login = async (usuario: LoginData): Promise<string | void> => {
    try {
        const response = await axiosInstance.post('login', usuario)
        return response.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response) {

                console.error('Error de login:', error.response.data.error);
            } else {

                console.error('Error sin respuesta:', error.message);
            }
        } else {
            console.error('Error inesperado:', error);
        }
    }
}

export const getUserByUserName = async (usuario: string): Promise<Usuario | void> => {
    try {
        const response = await axiosInstance.get(`usuario/${usuario}`)
        return response.data

    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                console.error('Error al obtener el usuario:', error.response.data.error);
            } else {

                console.error('Error sin respuesta:', error.message);
            }
        } else {
            console.error('Error inesperado:', error);
        }
    }
}