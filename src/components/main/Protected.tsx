import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

type PropTypes = {
  children: React.ReactNode;
};

const Protected = ({ children }: PropTypes) => {
  const { isAuth } = useAuthContext();

  if (isAuth) {
    return children;
  }
  return <Navigate to="/" />;
};

export default Protected;
