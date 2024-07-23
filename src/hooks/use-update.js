import { useState } from "react";
import { useNotesContext } from "./use-notes-context";


export const useUpdateNote = () => {
    const [isLoading, setIsLoading] = useState(false);

    const { dispatch } = useNotesContext();

    async function updateNote(id, title, description, tag) {
        // if (!email || !password) throw new Error("Email and Password are required");
        try {
            setIsLoading(true);
            const response = await fetch(`/api/v1/notes/update/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, description, tag })
            })
            const json = await response.json()

            if (response.ok) {
                dispatch({ type: 'UPDATE_NOTE', payload: json.data })

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
        updateNote,
    };
};
