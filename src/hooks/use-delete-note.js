import { useState } from "react";
import { useNotesContext } from "./use-notes-context";


export const useDeleteNote = () => {
    const [isLoading, setIsLoading] = useState(false);

    const { dispatch } = useNotesContext();

    async function deleteNote(note) {
        console.log(note)
        // if (!email || !password) throw new Error("Email and Password are required");
        try {
            setIsLoading(true);
            const response = await fetch(`/api/v1/notes/delete/${note._id}`, {
                method: 'DELETE',
            })
            const json = await response.json()
            console.log(json)

            if (response.ok) {
                dispatch({ type: 'DELETE_NOTE', payload: note })

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
        deleteNote,
    };
};
