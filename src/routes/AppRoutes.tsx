import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Register from '../pages/Register'
import ProtectedRoute from '../components/ProtectedRoute'
import Layout from '../components/Layout'
import Login from '../pages/Login'
import PublicRoute from '../components/PublicRoute'
import MascotaDetail from '../components/MascotaDetail'
import FormMascota from '../components/FormMascota'

const AppRoutes = () => {
    return (
        <Routes>

            {/* Rutas publicas */}
                <Route path='/' element={<PublicRoute><Login /></PublicRoute>} />
                <Route path='/register' element={<PublicRoute><Register /></PublicRoute>} />


                <Route element={<Layout />}>
                    <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
                    <Route path='/mascota/:id' element={<ProtectedRoute><MascotaDetail /></ProtectedRoute>} />
                    <Route path='/mascota' element={<ProtectedRoute><FormMascota /></ProtectedRoute>} />
                    {/* Rutas protegidas */}
                    <Route path='/profile' element={<ProtectedRoute><div>Ruta protegida</div></ProtectedRoute>} />

                </Route>
        </Routes>
    )
}

export default AppRoutes