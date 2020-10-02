import React, { useState} from 'react';
import '../App.css';

const NotesForm = ({addNote}) => {
    const [newNote, setNewNote] = useState("");
    const [newImportance, setNewImportance] = useState(false);
    return (
        <form onSubmit={e=> {
            addNote(e, newNote, newImportance);
            setNewNote("");
            setNewImportance(false);
        }}>
            <input onChange={e=>setNewNote(e.target.value)} type="text" value={newNote}/> 
            Tärkeä? <input onChange={e=>setNewImportance(!newImportance)}
                type="checkbox"
                checked={newImportance}/>
            <input type="submit" />
        </form>
    )
}

const NotesList = ({notes, deleteNote, changeImportance}) => {
    return (
        <div>
            {notes.map(note => {
            const localtime = new Date(note.date); 
            return (
                <p onClick={()=>changeImportance(note)}
                key={note.id} className={note.important ? "important" : "basic"}>
                {note.content} 
                {localtime.toLocaleString()}
                <button onClick={(e)=>deleteNote(e, note.id)}>Poista</button>
            </p>
            )
            })}
        </div>
    )
}

export {NotesList, NotesForm};