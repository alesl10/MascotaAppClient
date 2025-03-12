import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ReactNode } from 'react';

interface PublicRoute {
    children: ReactNode; 
  }

const  PublicRoute: React.FC<PublicRoute> = ({ children }) => {
    const { isAuthenticated } = useAuth();
    
    return !isAuthenticated ? children : <Navigate to="/home" />;
};

export default PublicRoute;