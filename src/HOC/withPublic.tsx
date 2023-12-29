import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { NextPage } from "next";

const withPublic = (Component: NextPage) => {
    return () => {
        const router = useRouter();
        const [authenticated, setAuthenticated] = useState(true);

        useEffect(() => {
            const checkToken = async () => {
                const token = localStorage.getItem("accessToken");

                if (token) {
                    router.replace("/dashboard");
                } else {
                    setAuthenticated(false)
                }
            }
            checkToken();
        }, []);


        if (!authenticated) {
            return <Component />;
        }
        return <div>Loading</div>
    }
};
export default withPublic;