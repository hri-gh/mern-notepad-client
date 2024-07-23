import { useState } from "react";
import { useAuthContext } from "./use-auth-context"
// import { useNavigate } from "react-router-dom"
import Cookies from 'js-cookie';

export const useLogout = () => {
    const [isLoading, setIsLoading] = useState(false);
    // let navigate = useNavigate();

    const { dispatch } = useAuthContext()

    const logout = async () => {
        try {
            setIsLoading(true);

            const response = await fetch('/api/v1/user/logout', {
                method: 'POST',
            })

            // dispatch logout action to set the user state to null
            if (!response.ok) {
                Cookies.remove('accessToken', { path: '/' });
            }

            dispatch({ type: 'LOGOUT' })

            // redirect to login page
            window.location.href = '/login'

            // navigate("/login")
            return response;
        } catch (err) {
            console.log('ERROR:', err);
        }
        finally {
            setIsLoading(false);
        }
    }

    return {
        isLoading,
        logout
    }

}
