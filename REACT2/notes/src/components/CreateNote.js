function CreateNote(props) {
    return (
        <div className="note" style={{ background: "rgba(255, 255, 255, 0)" }}>
            <textarea 
                cols="10"
                rows="5"
                placeholder="Type..."
                maxLength="100"
                onChange={props.inputChange}
                value={props.inputText}
            />
            <div className="note__footer">
                <span onClick={props.showNotes} className="label"> left</span>
                <button onClick={props.saveNotes} className="note__save">Save</button>
            </div>
        </div>
    )
}

export default CreateNote;