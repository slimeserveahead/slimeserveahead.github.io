import ExpenseItem from "./ExpenseItem"

function ExpenseList(props) {
    

    return (
        <ul className="list-group">
            {props.expenses.map(expense => (
                <ExpenseItem 
                    key={expense.id} 
                    id={expense.id} 
                    name={expense.name} 
                    cost={expense.cost} 
                    deleteExpense={props.deleteExpense} 
                />
            ))}
        </ul>
    )
}

export default ExpenseList