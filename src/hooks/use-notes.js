import { useState } from "react";
import { useNotesContext } from "./use-notes-context";

export const useNotes = () => {
    const [isLoading, setIsLoading] = useState(false);

    const { dispatch } = useNotesContext();

    async function getNotes() {
        try {
            setIsLoading(true);
            const response = await fetch('/api/v1/notes', {
                method: 'GET',
            })
            const json = await response.json()

            if (response.ok) {
                dispatch({ type: 'SET_NOTES', payload: json.data })
            }
            else throw new Error('Something went wrong!');

        } catch (err) {
            console.log('ERROR while fetching your notes:', err);
        }
        finally {
            setIsLoading(false);
        }
    }

    return {
        isLoading,
        getNotes
    };
};
