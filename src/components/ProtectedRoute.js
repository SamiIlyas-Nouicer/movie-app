// components/ProtectedRoute.js
import { useRouter } from "next/router";
import { useUser } from "../context/UserContext";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/SignIn");
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return children;
};

export default ProtectedRoute;
