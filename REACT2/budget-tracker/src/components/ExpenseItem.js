 import { TiDelete } from "react-icons/ti"

function ExpenseItem(props) {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {props.name}
            <div>
                <span className="badge badge-primary badge-pill mr-3 cost-container">
                    ₱{props.cost}
                </span>
                <TiDelete className="deleteIcon" onClick={(e) => props.deleteExpense(props.id, e)} size="1.5em"></TiDelete>
            </div>
        </li>
    )
}

export default ExpenseItem