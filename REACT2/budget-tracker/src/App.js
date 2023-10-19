import React from "react"
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';

function App() {

  const [expenses, setExpenses] = React.useState(JSON.parse(localStorage.getItem("expenses")) || [])
  const [totalExpense, setTotalExpense] = React.useState(0)
  const [name, setName] = React.useState("")
  const [cost, setCost] = React.useState("")
  const [budget, setBudget] = React.useState(localStorage.getItem("budget"))
  const [remaining, setRemaining] = React.useState(budget - totalExpense)
  const [isEditingBudget, setIsEditingBudget] = React.useState(false)

  React.useEffect(() => {
    localStorage.setItem("budget", budget)
  }, [budget])

  React.useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses))
  }, [expenses])

  function editBudget() {
    setIsEditingBudget(prevState => !prevState)
  }

  function saveExpense() {
    if (name && cost) {
      setExpenses(allExpenses => ([
        ...allExpenses,
        {
          id: uuidv4(),
          name: name,
          cost: cost
        },
      ]))
      setCost("")
      setName("")
    } else {
      window.alert("Please put name and cost before submitting")
    }
  }

  function deleteExpense(id, event) {
    event.stopPropagation()
    setExpenses(expenses => expenses.filter(expense => expense.id !== id))
    
  }

  React.useEffect(() => {
    setTotalExpense(0)
    expenses.map(expense => {
      setTotalExpense(prevExpense => parseInt(prevExpense) + parseInt(expense.cost))
      return expense
    })
    
  }, [expenses])

  React.useEffect(() => {
    setRemaining(budget - totalExpense)
  }, [totalExpense, budget])


  return (
    <div className="container">
      <h1 className="mt-3">My Budget Planner</h1>
      <div className="row mt-3">
        <div className="col-sm">
          <Budget 
            isEditingBudget={isEditingBudget}
            setIsEditingBudget={setIsEditingBudget}
            editBudget={editBudget}
            budget={budget}
            setBudget={setBudget}
          />
        </div>
        <div className="col-sm">
          <Remaining 
            remaining={remaining}
          />
        </div>
        <div className="col-sm">
          <ExpenseTotal 
            totalExpense={totalExpense}
          />
        </div>
      </div>
      <h3 className='mt-3'>Expenses</h3>
      <div className='row mt-3'>
        <div className='col-sm'>
          <ExpenseList 
            deleteExpense={deleteExpense}
            expenses={expenses}
          />
        </div>
      </div>
      <h3 className='mt-3'>Add Expense</h3>
      <div className='row mt-3'>
        <div className='col-sm'>
          <AddExpenseForm 
            saveExpense={saveExpense}
            setName={setName}
            setCost={setCost}
            name={name}
            cost={cost}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
