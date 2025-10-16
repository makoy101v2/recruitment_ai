import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useUser } from "../hooks/auth/useUser";

function ProtectedRoutes({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  // 1. Load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  // 2. If there is NO authenticated user, redirect to the /login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  if (isLoading) return <h2 className="text-center mt-10">Loading...</h2>;

  // 4. If there IS a user, render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoutes;
