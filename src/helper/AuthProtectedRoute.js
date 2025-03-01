"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AuthMiddleware = ({ children }) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("userdetails");

      if (!storedUser) {
        router.push("/login");
        return;
      }

      try {
        const user = JSON.parse(storedUser);
        if (user.authToken) {
          setIsAuthenticated(true);
        } else {
          localStorage.removeItem("userdetails");
          router.push("/login");
        }
      } catch (error) {
        console.error("Error parsing user data:", error);
        localStorage.removeItem("userdetails");
        router.push("/login");
      }
    }
    setLoading(false);
  }, []);

  if (loading) return <p>Loading...</p>; // Prevents flashing
  if (!isAuthenticated) return toast.success("Please login first"); 

  return <>{children}</>;
};

export default AuthMiddleware;
