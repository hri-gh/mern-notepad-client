import { Modal } from "../ui/modal"
import { useState } from "react"
import { UpdateNote } from "./update-note"

import { useUpdateNote } from "../../hooks/use-update"
import { useDeleteNote } from "../../hooks/use-delete-note"

export const Note = ({ note }) => {
    let [isOpen, setIsOpen] = useState(false)
    const [modifiedNote, setModifiedNote] = useState({ id: "", title: "", description: "", tag: "" })

    const { updateNote } = useUpdateNote()
    const { deleteNote } = useDeleteNote()


    function closeModal() {
        const { id, title, description, tag } = modifiedNote
        setIsOpen(false)
        updateNote(id, title, description, tag)
    }

    function openModal() {
        setIsOpen(true)
        setModifiedNote({ id: note._id, title: note.title, description: note.description, tag: note.tag })
    }

    const handleSaveAndClose = () => {
        const { id, title, description, tag } = modifiedNote
        setIsOpen(false)
        updateNote(id, title, description, tag)
        // console.log(modifiedNote);

    };

    const onDelete = (e) => {
        e.stopPropagation()
        deleteNote(note)
    }

    return (
        <>
            <Modal isOpen={isOpen} closeModal={closeModal} >
                <UpdateNote modifiedNote={modifiedNote} setModifiedNote={setModifiedNote} handleSaveAndClose={handleSaveAndClose} />
            </Modal >
            <div onClick={openModal} className="flex flex-col border-2 border-blue-500 m-1 w-56 rounded p-2">
                <h2 className="font-bold">{note.title}</h2>
                <hr className="" />
                <p>{note.description}</p>
                <footer className="mt-2 bg-gray-500 p-0.5 rounded-full w-20">
                    <p className="text-center">
                        {note.tag}
                    </p>
                </footer>
                <button onClick={onDelete}>Delete</button>
            </div>
        </>
    )
}
