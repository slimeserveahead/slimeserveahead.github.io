function AddExpenseForm(props) {
     return (
        <form>
            <div className="row">
                <div className="col-sm">
                    <label htmlFor="name">Name</label>
                    <input
                        autoComplete="off"
                        required="required"
                        type="text"
                        className="form-control"
                        id="name"
                        value={props.name}
                        onChange={(e) => props.setName(e.target.value)}
                    ></input>
                </div>
                <div className="col-sm">
                    <label htmlFor="cost">Cost</label>
                    <input
                        autoComplete="off"
                        required="required"
                        type="number"
                        className="form-control"
                        id="cost"
                        value={props.cost}
                        onChange={(e) => props.setCost(e.target.value)}
                    ></input>
                </div>
            </div>
            <div className="row">
                <div className="col-sm">
                    <div className="btn btn-primary mt-3" onClick={props.saveExpense}>
                        Save
                    </div>
                </div>
            </div>
        </form>
     )
}

export default AddExpenseForm