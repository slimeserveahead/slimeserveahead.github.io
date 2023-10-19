import React from "react"
import { DeleteForeverOutlined } from "@mui/icons-material"

function Note(props) {

    const [editMode, setEditMode] = React.useState(false)
    const [editText, setEditText] = React.useState(props.text)

    function editHandler() {
        setEditMode(true)
    }

    function cancelEditMode() {
        setEditMode(false)
        setEditText(props.text)
    }
    
    function editTextHandler(e) {
        setEditText(e.target.value)
    }

    function saveEdit(id, text) {
        props.saveEdit(id, text)
        setEditMode(false)
    }

    return (
        <div>
        {editMode ? 
            <div className="note" style={{ background: "rgba(255, 255, 255, 0)" }}>
                <textarea 
                    cols="10"
                    rows="5"
                    value={editText}
                    maxLength="100"
                    onChange={editTextHandler}
                />
                <div className="note__footer">
                    <span className="note__save" onClick={cancelEditMode}>cancel</span>
                    <button className="note__save"
                        onClick={() => saveEdit(props.id, editText)}
                    >
                        Save
                    </button>
                </div>
            </div>
            :
            <div className="note" >
                <div className="note__body">{props.text}</div>
                <div className="note__footer">
                    <span onClick={editHandler} className="note__save">edit</span>
                    <DeleteForeverOutlined
                        className="note__delete"
                        aria-hidden="true"
                        onClick={() => props.deleteNote(props.id)}
                    ></DeleteForeverOutlined>
                </div>
            </div>
        }
        </div>
        
    )
}

export default Note;