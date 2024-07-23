// import { useState } from 'react';
import { Bell, UserPlus, Palette, Image, Archive, Ellipsis, RotateCcw, RotateCw, Pin } from 'lucide-react';
// import { useUpdateNote } from '../../hooks/use-update';

export const UpdateNote = ({ modifiedNote, setModifiedNote, handleSaveAndClose }) => {
    // const [modifiedNote, setModifiedNote] = useState({ id: "", title: "", description: "", tag: "" })

    // const { updateNote } = useUpdateNote()



    // const handleSaveAndClose = () => {
    //     const { id, title, description, tag } = modifiedNote
    //     updateNote(id, title, description, tag)
        // console.log(modifiedNote);

        // onClose({ title, note });
        // const { title, description, tag } = note
        // addNote(title, description, tag)

    // };

    // const updateNote = (currentNote) => {
    //     setModifiedNote({ id: currentNote._id, title: currentNote.title, description: currentNote.description, tag: currentNote.tag })
    // }

    const onChange = (e) => {
        setModifiedNote({ ...modifiedNote, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className="max-w-lg mx-auto mt-10 p-4 bg-gray-800 text-white rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-2">
                    <input

                        type="text"
                        placeholder="Title"
                        value={modifiedNote.title}
                        name='title'
                        onChange={onChange}
                        className="w-full p-2 bg-gray-800 text-white border-b border-gray-700 focus:outline-none"
                    />
                    <Pin className="ml-2 cursor-pointer " />
                </div>
                <textarea

                    rows="3"
                    placeholder="Take a note..."
                    value={modifiedNote.description}
                    name='description'
                    onChange={onChange}
                    className="w-full h-auto p-2 bg-gray-800 text-white border-b border-gray-700 focus:outline-none"
                />
                <input

                    type="text"
                    placeholder="Tag"
                    value={modifiedNote.tag}
                    name='tag'
                    onChange={onChange}
                    className="w-full p-2 bg-gray-800 text-white border-b border-gray-700 focus:outline-none"
                />
                <div className="flex justify-between items-center mt-2">
                    <div className="flex space-x-4">

                        <Bell className='cursor-pointer w-4' />
                        <UserPlus className="cursor-pointer w-4" />
                        <Palette className="cursor-pointer w-4" />
                        <Image className="cursor-pointer w-4" />
                        <Archive className="cursor-pointer w-4" />
                        <Ellipsis className="cursor-pointer w-4" />
                    </div>
                    <div className="flex space-x-4">
                        <RotateCcw className="cursor-pointer w-4" />
                        <RotateCw className="cursor-pointer w-4" />
                        <button
                            onClick={handleSaveAndClose}
                            className="cursor-pointer focus:outline-none"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}
