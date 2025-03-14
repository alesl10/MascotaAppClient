import { Route, Routes } from 'react-router-dom'
// pages
import { Home, Contacto, Register, Login, RegistroMascota, Perfil } from '../pages/index'
import Layout from '../components/Layout'
import ProtectedRoute from '../components/ProtectedRoute'
import PublicRoute from '../components/PublicRoute'
import MascotaDetail from '../components/MascotaDetail'

const AppRoutes = () => {
    return (
        <Routes>

            {/* Rutas publicas */}
            <Route path='/' element={<PublicRoute><Login /></PublicRoute>} />
            <Route path='/register' element={<PublicRoute><Register /></PublicRoute>} />


            {/* Rutas protegidas */}
            <Route path='/*' element={<Layout />}>
                <Route path='home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
                <Route path='mascota/:id' element={<ProtectedRoute><MascotaDetail /></ProtectedRoute>} />
                <Route path='agregarmascota' element={<ProtectedRoute><RegistroMascota /></ProtectedRoute>} />
                <Route path='profile' element={<ProtectedRoute><Perfil/></ProtectedRoute>} />
                <Route path='contacto' element={<ProtectedRoute><Contacto /></ProtectedRoute>} />
                <Route path='*' element={
                    <div className="w-full h-full text-4xl bg-white text-center flex justify-center items-center">
                        <img src="/404_page-not-found-1024x576.webp" alt="" />
                    </div>}
                />
            </Route>

            <Route path='*' element={
                <div className="w-full h-full text-4xl bg-white text-center flex justify-center items-center">
                    <img src="/404_page-not-found-1024x576.webp" alt="" className=''/>
                </div>}
            />
        </Routes>
    )
}

export default AppRoutes