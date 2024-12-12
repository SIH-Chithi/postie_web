import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
  allowedType: string;
}

const ProtectedRoute = ({ children, allowedType }: ProtectedRouteProps) => {
  const [authorized, setAuthorized] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const userType = localStorage.getItem("type");
    console.log("User Type:", userType);
    console.log("Allowed Type:", allowedType);

    if (userType === allowedType) {
      console.log("Authorized");
      setAuthorized(true);
    } else {
      console.log("Unauthorized");
      router.replace("/auth/signIn");
    }
  }, [allowedType, router]);

  if (!authorized) {
    return (
      <div className="flex justify-center mx-auto items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
