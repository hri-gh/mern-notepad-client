import { AuthContext } from "../contexts/auth-context";
import { useContext } from "react";

export const useAuthContext = () => {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error("useAuthContext must be used within the AuthContext Provider")
    }

    return context
}
