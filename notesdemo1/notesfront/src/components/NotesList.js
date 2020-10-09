import React, { useState} from 'react';
import '../App.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const NotesForm = ({addNote}) => {
    const [newNote, setNewNote] = useState("");
    const [newImportance, setNewImportance] = useState(false);
    return (
        <Row className="text-center justify-content-center">
        
        <Form onSubmit={e=> {
            addNote(e, newNote, newImportance);
            setNewNote("");
            setNewImportance(false);
        }}>
        
            <Form.Control className="m-2" onChange={e=>setNewNote(e.target.value)} type="text" value={newNote}/> 
            Tärkeä? 
            <Form.Control  onChange={e=>setNewImportance(!newImportance)}
                type="checkbox"
                checked={newImportance}/>
            <Button variant="primary" type="submit" className="m-2">Send</Button>
        </Form>
        </Row>
    )
}



const NotesList = ({notes, deleteNote, changeImportance}) => {
    return (
        <Col className="mt-4">
            {notes.map(note => {
            const localtime = new Date(note.date); 
            return (
                <p onClick={()=>changeImportance(note)}
                key={note.id} className={note.important ? "important" : "basic"}>
                {note.content} 
                {localtime.toLocaleString()}
                <Button variant="outline-primary" size="sm" className="ml-2" onClick={(e)=>deleteNote(e, note.id)}>Poista</Button>
            </p>
            )
            })}
        </Col>
    )
}

export {NotesList, NotesForm};