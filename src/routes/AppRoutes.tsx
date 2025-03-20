import { Route, Routes } from 'react-router-dom'
// pages
import { Home, Contacto, Register, Login, RegistroMascota, Perfil } from '../pages/index'
import Layout from '../components/Layout'
import ProtectedRoute from '../components/ProtectedRoute'
import PublicRoute from '../components/PublicRoute'
import MascotaDetail from '../components/MascotaDetail'
import NotFound from '@/components/NotFound'

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
                <Route path='profile' element={<ProtectedRoute><Perfil /></ProtectedRoute>} />
                <Route path='contacto' element={<ProtectedRoute><Contacto /></ProtectedRoute>} />
                <Route path='*' element={
                    <NotFound />}
                />
            </Route>

            <Route path='*' element={
                <NotFound />}
            />
        </Routes>
    )
}

export default AppRoutes