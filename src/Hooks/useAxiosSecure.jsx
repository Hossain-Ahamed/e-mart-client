
import useAuth from "./useAuth";
import axios from "axios";
import { useEffect } from "react";
import Cookies from "js-cookie";

const useAxiosSecure = () => {
    const { logOut } = useAuth();
   // const navigate = useNavigate();
    const axiosSecure = axios.create({
        baseURL: `${import.meta.env.VITE_SERVER_ADDRESS}`,
    })

    useEffect(() => {

        axiosSecure.interceptors.request.use((config) => {

            const token = Cookies.get('_at');

            if (token) {
                
                config.headers.Authorization = `Bearer ${token}`
            }
            config.withCredentials = true
            return config;
        })
        axiosSecure.interceptors.response.use((response) => response,
            async (error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    console.log('out1')
                    await logOut();
                    // navigate('/login');

                }
                return Promise.reject(error);
            }
        );
    }, [logOut, axiosSecure]);
    return { axiosSecure };
};

export default useAxiosSecure;