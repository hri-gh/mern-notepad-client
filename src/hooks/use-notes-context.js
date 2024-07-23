import { useContext } from 'react';
import { NotesContext } from "../contexts/note-context"

export const useNotesContext = () => {
    const context = useContext(NotesContext)

    if (!context) {
        throw new Error('useNotesContext must be used within the NotesContextProvider')
    }

    return context;
}
