import { NoteList } from "../components/notes/note-list";
import { AddNote } from "../components/notes/add-note";
// import { InitialNote } from "../components/notes/InitialNote";
// import { useState } from 'react';


const Home = () => {
  // const [isAddingNote, setIsAddingNote] = useState(false);
  // const [notes, setNotes] = useState([]);

  // const handleAddNoteClick = () => {
  //   setIsAddingNote(true);
  // };


  // const handleCloseAddNote = (newNote) => {
  //   console.log('Saving note:', newNote);
  //   if (newNote.title || newNote.note) {
  //     setNotes([...notes, newNote]);
  //   }
  //   setIsAddingNote(false);
  // };

  return (
    <>
      {/* <div className="bg-gray-900 min-h-screen p-4 text-white">
        {!isAddingNote && <InitialNote onClick={handleAddNoteClick} />}
        {isAddingNote && <AddNote onClose={handleCloseAddNote} />}
        <div className="mt-10">
          {notes.map((note, index) => (
            <div key={index} className="mb-4 p-4 bg-gray-800 rounded-lg shadow-md">
              <h2 className="text-lg font-bold">{note.title}</h2>
              <p>{note.note}</p>
            </div>
          ))}
        </div>
      </div> */}
      <AddNote />
      <br />
      <NoteList />
    </>
  )
}

export default Home



