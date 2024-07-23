import { useState } from "react";

export const useSignup = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null)
    const [response, setResponse] = useState(null)

    async function signup(email, password, username) {
        try {
            setResponse(null)
            setIsLoading(true);
            setError(null)

            const res = await fetch("/api/v1/user/register", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, email, password }) //
            })

            const json = await res.json()

            setResponse({ status: res.status, message: json.message, extraDetails: json.extraDetails })
            if (res.ok) {
                setIsLoading(false)
                return json;
            }

        } catch (err) {
            setError('An error occurred while creating an account');
        }
        finally {
            setIsLoading(false);
        }
    }

    return {
        isLoading,
        error,
        response,
        signup,
        setError,
        setResponse,
    };
};
