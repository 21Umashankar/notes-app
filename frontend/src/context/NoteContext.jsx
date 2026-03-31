import { createContext ,useEffect, useState} from "react";
import axios from "axios";
import BACKEND_URL from "../api/url";
export const NoteContext = createContext();

export const NoteProvider = ({children}) => {
  const [notes,setNotes] = useState([]);
const [loading,setLoading] = useState(true);

//fetch notes
const getNotes = async () => {
  setLoading(true);
  try {
    const response = await BACKEND_URL.get("/get-notes");
    setNotes(response.data);
  } catch (error) {
    console.error("Error fetching notes:", error);
  } finally {
    setLoading(false);
  }
}

useEffect(()=>{
  getNotes();
},[]);

//create notes
const createNote = async (note) => {
  const response = await BACKEND_URL.post("/create-note", note);
  setNotes([response.data, ...notes]);
}

//update note
const updateNote = async (id, updatedNote) => {
  const response = await BACKEND_URL.put(`/update-note/${id}`, updatedNote);
  setNotes(notes.map(note => note._id === id ? response.data : note));
}

//delete note
const deleteNote = async (id) => {
  await BACKEND_URL.delete(`/delete-note/${id}`);
  setNotes(notes.filter(note => note._id !== id));
}


return(
  <NoteContext.Provider value={{notes,createNote,loading,updateNote,deleteNote}}>
    {children}
  </NoteContext.Provider>
)
}