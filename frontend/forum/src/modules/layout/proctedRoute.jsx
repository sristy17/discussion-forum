import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const userState = useSelector((state) => state.user);

  useEffect(() => {
    if (!userState.user) {
      navigate("/login");
    }
  }, [userState.user, navigate]);

  return userState.user ? <div>{children}</div> : <div>Loading...</div>;
};

export default ProtectedRoute;
