import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { NextPage } from "next";

const withAuth = (Component: NextPage) => {
  return () => {
    const router = useRouter();
    const [authenticated, setAuthenticated] = useState(false);   
      
    useEffect(() => {
      const checkToken = async () => {
        const token = localStorage.getItem("accessToken");
      
        if (!token) {
          router.replace("/login");
        } else{
            setAuthenticated(true)
        }
      }
      checkToken();
    }, []);
    
    if (authenticated) {
      return <Component />;
    }

    return <div>Loading</div>
  }
};  
export default withAuth;