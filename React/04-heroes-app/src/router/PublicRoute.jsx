import { Navigate } from "react-router-dom";
import { useUser } from "../auth/hooks/useUser";

export const PublicRoute = ({children}) => {
  const { logged } = useUser();

	return !logged ? children : <Navigate to='/marvel' /> ;
}
