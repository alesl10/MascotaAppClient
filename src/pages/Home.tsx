import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Mascota } from "../types";
import { getMascotasByUserId } from "../api/mascota";
import MascotasContainer from "../components/MascotasContainer";
import { Link } from "react-router-dom";

export const Home = () => {
    const { user } = useAuth();
    const [mascotas, setMascotas] = useState<Mascota[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        fetchMascotas();
    }, [user]);

    const fetchMascotas = async () => {
        if (user) {
            try {
                const response = await getMascotasByUserId(user.userId.toString());
                setMascotas(response);
            } catch (error) {
                console.error("Error al obtener mascotas", error);
            } finally {
                setLoading(false);
            }
        }
    };


    return (
        <div className='flex flex-col flex-1 items-center gap-5' >

            <div className="w-full flex justify-center bg-primary/20 h-[100px]">
                <div className="container p-5">
                    <h3 className="text-xl font-semibold text-primary/60 sombra ">Mis Mascotas</h3>
                    <span className="text-4xl text-primary/70 sombra">Administra tus mascotas</span>
                </div>
                <img src="/mascotas.png" alt="mascotas imagen" className=" object-contain sombra" />
            </div>

            <div className="w-full flex-1 p-5 flex flex-col items-center gap-5" >

                {loading ? (
                    <div>Cargando mascotas...</div>
                ) : mascotas && mascotas.length > 0 ? (
                    <MascotasContainer mascotas={mascotas} />
                ) : (
                    <div>No tienes mascotas.</div>
                )}
                <Link to={'/agregarmascota'}><button className="text-fondo bg-primary rounded-2xl text-xl font-semibold hover:saturate-150 transition-all ">Agregar Mascota</button></Link>
            </div>
        </div>
    )
};
