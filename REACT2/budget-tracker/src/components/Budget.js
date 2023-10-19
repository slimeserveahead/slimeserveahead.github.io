function Budget(props) {
    return (
        <div className="alert alert-secondary budget-container">
            {props.isEditingBudget ? <span>Budget: ₱<input type="number" value={props.budget} onChange={(e) => props.setBudget(e.target.value)}></input></span> : <span>Budget: ₱{props.budget}</span>}
            
            <div onClick={props.editBudget} className="budgetEditButton">{props.isEditingBudget ? "Save" : "Edit"}</div>
        </div>
    )
}

export default Budget