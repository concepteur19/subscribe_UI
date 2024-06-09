import { Navigate, RouteProps } from 'react-router-dom';

interface PrivateRouteElementProps {
    element: React.ReactNode;
}

const PrivateRoute: React.FC<RouteProps & PrivateRouteElementProps> = ({ element }) => {
    const token = localStorage.getItem('token');
    // console.log("token ", token);
    return token ? element : <Navigate to="/Login" replace />;
};

export default PrivateRoute;