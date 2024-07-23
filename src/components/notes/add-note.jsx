import { useState, useRef, useEffect } from 'react';
import { InitialNote } from './initial-note';
import { useAddNote } from '../../hooks/use-add-note';

import { Bell, UserPlus, Palette, Image, Archive, Ellipsis, RotateCcw, RotateCw, Pin } from 'lucide-react';

export const AddNote = () => {
    const [note, setNote] = useState({ title: "", description: "", tag: "" })
    const [isAddingNote, setIsAddingNote] = useState(false);

    const { addNote } = useAddNote()

    const ref = useRef();
    const titleRef = useRef();
    const noteRef = useRef();
    const tagRef = useRef();

    const handleAddNoteClick = () => {
        setIsAddingNote(true);
    };

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            console.log('Clicked outside, saving note...');
            const currentTitle = titleRef.current.value;
            const currentNote = noteRef.current.value;
            const currentTag = tagRef.current.value;
            // onClose({ title: currentTitle, note: currentNote });
            addNote(currentTitle, currentNote, currentTag)
            setIsAddingNote(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSaveAndClose = () => {
        console.log('Close button clicked, saving note...');
        // onClose({ title, note });
        const { title, description, tag } = note
        addNote(title, description, tag)
        setIsAddingNote(false);
    };

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <>
            {!isAddingNote && <InitialNote onClick={handleAddNoteClick} />}
            {isAddingNote && <div ref={ref} className="max-w-lg mx-auto mt-10 p-4 bg-gray-800 text-white rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-2">
                    <input
                        ref={titleRef}
                        type="text"
                        placeholder="Title"
                        value={note.title}
                        name='title'
                        onChange={onChange}
                        className="w-full p-2 bg-gray-800 text-white border-b border-gray-700 focus:outline-none"
                    />
                    <Pin className="ml-2 cursor-pointer " />
                </div>
                <textarea
                    ref={noteRef}
                    rows="3"
                    placeholder="Take a note..."
                    value={note.description}
                    name='description'
                    onChange={onChange}
                    className="w-full p-2 bg-gray-800 text-white border-b border-gray-700 focus:outline-none"
                />
                <input
                    ref={tagRef}
                    type="text"
                    placeholder="Tag"
                    value={note.tag}
                    name='tag'
                    onChange={onChange}
                    className="w-full p-2 bg-gray-800 text-white border-b border-gray-700 focus:outline-none"
                />
                <div className="flex justify-between items-center mt-2">
                    <div className="flex space-x-4">

                        <Bell className='cursor-pointer w-4' />
                        <UserPlus className="cursor-pointer w-4" />
                        <Palette className="cursor-pointer w-4"  />
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
            </div>}
        </>

    );
};


