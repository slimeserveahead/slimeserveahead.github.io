function ExpenseTotal(props) {
    return (
        <div className="alert alert-primary">
            <span>Spent so far: ₱{props.totalExpense}</span>
        </div>
    )
}

export default ExpenseTotal