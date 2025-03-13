export interface Usuario {
    id?: number
    nombre: string
    apellido: string
    direccion: string
    provincia: string
    pais: string
    localidad: string
    codigoPostal: string
    email: string
    usuario: string
    contraseña: string
    telefono: string
    mascotas?: Mascota[]
    avatar:string
}

export interface Mascota {
    id: number
    nombre: string
    edad: number
    peso: number
    sexo: string
    alergias?: Alergia[]
    medicamentos?: string[]
    datosMedicos: string
    veterinaria?: Veterinaria
    seguro?: string
    notas?: string[]
    observaciones?: string[]
    comentarioVet?: string
    dueño:Usuario
    foto?:string | null
    usuario_id?:number | null
}

export interface Alergia {
    tipo: string
    tratamiento: string
}

export interface Veterinaria {
    id: number
    nombre: string
    nroCliente: string
    telefono: string
    plan: string
    direccion: string
}