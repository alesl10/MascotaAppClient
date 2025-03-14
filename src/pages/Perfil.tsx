import { getUserByUserName } from "@/api/usuario"
import { useAuth } from "@/context/AuthContext"
import { Usuario } from "@/types"
import { useEffect, useState } from "react"

export const Perfil = () => {
    const [usuarioDTO, setUsuarioDTO] = useState<Usuario>()
    const { user } = useAuth()

    const getProfile = async (usuario: string) => {
        const userDB = await getUserByUserName(usuario)
        setUsuarioDTO(userDB as Usuario)
    }

    useEffect(() => {
        getProfile(user?.usuario as string)
    }, [user])

    return (
        <div>
            {usuarioDTO ?
                <div className="flex gap-1 p-10 m-auto container text-2xl">
                    <div className="w-1/2 ">
                        <img src={`http://localhost:8080${usuarioDTO.avatar}`} alt="" className="w-[500px] object-contain" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <span>{usuarioDTO.usuario}</span>
                        <span>{usuarioDTO.nombre}</span>
                        <span>{usuarioDTO.apellido}</span>
                        <span>{usuarioDTO.email}</span>
                        <span>{usuarioDTO.telefono}</span>
                        <span>{usuarioDTO.pais}</span>
                        <span>{usuarioDTO.provincia}</span>
                        <span>{usuarioDTO.localidad}</span>
                        <span>{usuarioDTO.direccion}</span>
                        <span>{usuarioDTO.codigoPostal}</span>
                    </div>
                </div>
                : <span>No Existe el usuario</span>
            }
        </div>
    )
}
