import { useState } from "react";
import { useAuthContext } from "./use-auth-context";
import { useNavigate } from "react-router-dom"

export const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false);
    let navigate = useNavigate();

    const { dispatch } = useAuthContext();

    async function login(email, password) {
        // if (!email || !password) throw new Error("Email and Password are required");
        try {
            setIsLoading(true);

            const response = await fetch('/api/v1/user/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }) // Pass the EMAIL and PASSWORD as an object in json format
            })
            const json = await response.json()

            console.log("LOGIN_JSON::", json.data.user.username)

            if (response.ok) {
                // Update the  Auth context with this new user information
                dispatch({ type: 'LOGIN', payload: json })
                localStorage.setItem('user', json.data.user.username)
                navigate("/")
            }
            else throw new Error('Something went wrong!');

        } catch (err) {
            console.log('ERROR:', err);
        }
        finally {
            setIsLoading(false);
        }
    }

    return {
        isLoading,
        login
    };
};
