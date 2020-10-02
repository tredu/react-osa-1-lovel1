import React, { useState, useEffect } from 'react';
import './App.css';
import { NotesList, NotesForm } from './components/NotesList.js'
import notesService from './services/notes.js'
import userService from './services/user.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Login} from './components/Login.js';
import Registration from './components/Registration.js';


const App = () => {
  const [notes, setNotes] = useState([]);
  const [authToken, setAuthToken] = useState(null);

  const login = (e, userData) => {
    e.preventDefault();
    userService
    .login(userData)
    .then(response => {
      console.log(response)
      setAuthToken(response.token)
    })
    .catch(()=>{
      console.log("Login failed")
    })
  }

  const addNote = (e, text, importance) => {
    e.preventDefault()
    const testNote = {
      content: text,
      date: new Date(),
      important: importance
    };
    notesService.add(testNote)
      .then(response => {
        setNotes(notes.concat(response))
        console.log("sinne meni", response);
      });
  }

  const deleteNote = (e, id) => {
    e.stopPropagation();
    notesService
      .remove(id)
      .then(response => {
        console.log("poisto onnistui")
        setNotes(notes.filter(note => id !== note.id))
      })

  }

  const changeImportance = (note) => {
    const tempNote = { ...note, important: !note.important };
    notesService
      .update(note.id, tempNote)
      .then(response => {
        console.log("muutos onnistui")
        setNotes(notes.map(n => {
          if (n.id === note.id) {
            n = tempNote;
          }
          return n;
        }))
      })
  }

  const initHook = () => {
    notesService
      .getAll()
      .then(response => {
        console.log("promise fullfilled", response);
        setNotes(response);
      });
  }

  useEffect(initHook, []);

  return (
    <div className="App">
      <header className="App-header">
        Notesdemo
      </header>
      <section>
        <NotesList notes={notes} deleteNote={deleteNote} changeImportance={changeImportance} />
        <NotesForm addNote={addNote} />
        <Registration />
        <Login submitHandler={login}/>
      </section>
    </div>
  );
}

export default App;
