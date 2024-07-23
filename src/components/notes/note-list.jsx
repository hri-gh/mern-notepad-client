import { Note } from "./note"
import { useEffect } from "react";
import { useNotes } from "../../hooks/use-notes"
import { useNotesContext } from "../../hooks/use-notes-context"
import { useAuthContext } from "../../hooks/use-auth-context";

export const NoteList = () => {
    const { notes } = useNotesContext();
    const { getNotes, isLoading } = useNotes()
    const { user } = useAuthContext()

    useEffect(() => {
        if (user) {
            getNotes()
        }
    }, [user])

    return (
        <>
            {isLoading && <div>Loading...</div>}
            <div className="flex flex-wrap justify-between">
                {notes?.length === 0 && (<h1>No Note</h1>)}
                {notes?.map((note) => (
                    <Note key={note._id} note={note} />
                ))}
            </div>
        </>
    )
}

