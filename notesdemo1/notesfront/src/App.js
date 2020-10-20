import React, { useState, useEffect } from 'react';
import './App.css';
import { NotesList, NotesForm } from './components/NotesList.js'
import notesService from './services/notes.js'
import userService from './services/user.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login } from './components/Login.js';
import Registration from './components/Registration.js';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';


const App = () => {
  const [notes, setNotes] = useState([]);
  const [authToken, setAuthToken] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleError = () => {
    if (errorMessage !== "") {
      const timer = setTimeout(() => setErrorMessage(""), 5000);
      return () => clearTimeout(timer);
    }
  }

  useEffect(handleError, [errorMessage]);

  const userHook = () => {
    const loggedUserJSON = window.localStorage.getItem('loggedNotesAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setAuthToken(user.token)
    }
  }

  const login = (e, userData) => {
    e.preventDefault();
    userService
      .login(userData)
      .then(response => {
        console.log(response)
        setAuthToken(response.token)

        window.localStorage.setItem('loggedNotesAppUser', JSON.stringify(response))
      })
      .catch(() => {
        console.log("Login failed")
        setErrorMessage(<Alert variant="danger">Login failed: Check username and password</Alert>)
      })
  }

  const logout = () => {
    window.localStorage.removeItem('loggedNotesAppUser')
    window.location.reload()
  }

  const addNote = (e, text, importance) => {
    e.preventDefault()
    const testNote = {
      content: text,
      date: new Date(),
      important: importance
    };
    notesService.add(testNote, authToken)
      .then(response => {
        setNotes(notes.concat(response))
        console.log("sinne meni", response);
      })
      .catch(() => {
        console.log("Login failed")
        setErrorMessage(<Alert variant="danger">Error: Can not add a note</Alert>)
      });
  }

  const deleteNote = (e, id) => {
    e.stopPropagation();
    notesService
      .remove(id, authToken)
      .then(response => {
        console.log("poisto onnistui")
        setNotes(notes.filter(note => id !== note.id))
      })

  }

  const changeImportance = (note) => {
    const tempNote = { ...note, important: !note.important };
    notesService
      .update(note.id, tempNote, authToken)
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
    userHook();

    if (authToken === null) {
      return
    }

    notesService
      .getAll(authToken)
      .then(response => {
        console.log("promise fullfilled", response);
        setNotes(response);
      });
  }

  useEffect(initHook, [authToken]);

  return (
    <div className="App">
      <header className="App-header">
        Notesdemo
      </header>
      {errorMessage}
      <section>
        <NotesList notes={notes} deleteNote={deleteNote} changeImportance={changeImportance} />
        <NotesForm addNote={addNote} />
        <Registration />
        <Login submitHandler={login} />

        {authToken && <Button onClick={logout}>Logout</Button>}

      </section>
    </div>
  );
}

export default App;
