import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Mascota } from "../types";
import { getMascotasByUserId } from "../api/mascota";
import MascotasContainer from "../components/MascotasContainer";

const Home = () => {
    const { user, logout } = useAuth();
    const [mascotas, setMascotas] = useState<Mascota[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true)
    
    useEffect(() => {
        setTimeout(() => {
            fetchMascotas();
        }, 2000)
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
        <div className='flex flex-col items-center justify-center gap-5'>
            <div>usuario: {user?.usuario}</div>
            <button onClick={logout}>Cerrar sesión</button>
            {loading ? (
                <div>Cargando mascotas...</div>
            ) : mascotas && mascotas.length > 0 ? (
                <MascotasContainer mascotas={mascotas} />
            ) : (
                <div>No tienes mascotas.</div>
            )}
        </div>
    )
};

export default Home;