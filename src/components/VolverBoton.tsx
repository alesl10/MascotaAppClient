import { useNavigate } from "react-router-dom"


const VolverBoton = () => {
    const navigate = useNavigate()
    return (
        <button className="bg-red-600/70 px-3 py-1 text-white text-xl rounded-xl" onClick={() => navigate(-1)}>Volver </button>
    )
}

export default VolverBoton