import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { NextPage } from "next";
import PageLoader from "../common/PageLoader";

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
                    console.log("hello")
                    setAuthenticated(false)
                }
            }
            checkToken();
        }, []);


        if (!authenticated) {
            return <Component />;
        }
        // return <PageLoader/>
    }
};
export default withPublic;