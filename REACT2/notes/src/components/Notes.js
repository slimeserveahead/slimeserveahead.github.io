import React from "react"
import "../styles/Note.css"
import { v4 as uuidv4 } from 'uuid'
import CreateNote from "./CreateNote";

import Note from "./Note"


function Notes() {

    const [inputText, setInputText] = React.useState("")
    const [notes, setNotes] = React.useState(JSON.parse(localStorage.getItem("notes")) || [] )

    function inputChange(e) {
        setInputText(e.target.value)
    }

    React.useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
    }, [notes])
    
    function saveNotes() {
        setNotes(prevNotes => [
            {
                id: uuidv4(),
                text: inputText
            },
            ...prevNotes
        ])
        setInputText("")
    }

    function showNotes() {
        const localNotes = JSON.parse(localStorage.getItem("notes"))
        console.log(localNotes)

    }

    function deleteNote(id) {
        setNotes(prevNotes => prevNotes.filter(note => note.id !== id))
    }

    function saveEdit(id, text) {
        setNotes(prevNotes => {
            const index = prevNotes.findIndex(note => note.id === id)

            if (index !== -1) {
                const updatedNote = {...prevNotes[index], text: text}
                const updatedNotes = prevNotes.filter(note => note.id !== id)

                updatedNotes.unshift(updatedNote)

                return updatedNotes
            }

            return prevNotes
        })
    }

    return (
        <div className="notes">
            {notes.map(note => (
                <Note 
                    key={note.id}
                    id={note.id}
                    text={note.text}
                    deleteNote={deleteNote}
                    saveEdit={saveEdit}
                />
            ))}
            <CreateNote 
                inputChange={inputChange}
                inputText={inputText}
                saveNotes={saveNotes}
                showNotes={showNotes}
            />
        </div>
    )
}

export default Notes;