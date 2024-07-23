import { createContext, useReducer,} from 'react';

// const initialNotes = []

//Create Context
export const NotesContext = createContext(null);


// Context Provider
export const NotesContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(notesReducer, {notes:null});  //Initial state is an empty array for notes.
    // console.log(state.notes);
    //dispatch({type:'TYPE_OF_ACTION', payload:[{},{}] })  //initializing the state with empty object.

    return (
        <NotesContext.Provider value={{ ...state, dispatch }}>
            {children}
        </NotesContext.Provider>
    )
}


// state = previousState, action = { type, payload }
export const notesReducer = (state, action) => {
    switch (action.type) {
        case "SET_NOTES": {
            return {
                notes: action.payload
            }
        }
        case "ADD_NOTE": {
            return {
                // ...state,
                notes: [action.payload, ...state.notes]
            }
        }

        case "UPDATE_NOTE": {
            const updatedNotes = state.notes.map((note) => {
                if (note._id === action.payload._id) {
                    return action.payload;
                }
                return note;
            });
            return {
                notes: updatedNotes
            }
        }

        case "DELETE_NOTE":{

            return {
                notes : state.notes.filter((note)=>{return note._id!==action.payload._id})

            }
        }
        default: {
            return state;
        }
    }
}


// Custom Hooks for Use Context or Consumer
// Either keep it here or move it to a another directory called /hooks/useNotesContext.js
// export const useNotesContext = () => {
//     return useContext(NotesContext)
// }
