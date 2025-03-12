import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ReactNode } from 'react';

interface ProtectedRouteProps {
    children: ReactNode; 
  }

const  ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const { isAuthenticated } = useAuth();
    const location = useLocation(); 

    
    return isAuthenticated ? children : <Navigate to="/" state={{ from: location }} />;
};

export default ProtectedRoute;