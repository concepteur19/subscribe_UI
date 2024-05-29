import { useNavigate } from "react-router-dom";

export default async function UserLogOut(): Promise<string> {
    localStorage.clear();
    const navigate = useNavigate();
    navigate('Login');    
    return 'utilisateur déconnecté'
} 