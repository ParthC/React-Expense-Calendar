import React from 'react'
import '../../css/userExpense.css'
import ExpenseForm from './ExpenseForm'

const UserExpense = (props) => {

  const saveExpenseDataHandler = (e) => {
    const expenseData = { 
      ...e,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
  }

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  )
}

export default UserExpense
