import React, {useState} from 'react'
import '../../css/expenseForm.css'

const ExpenseForm = (props) => {

const [inputTitle, setTitle] = useState('')
const [inputAmount, setAmount] = useState('')
const [inputDate, setDate] = useState('')
  
  const changeTitle = (e) => {
    setTitle(e.target.input)
  }

  const changeAmount = (e) => {
    setAmount(e.target.input)
  }

  const changeDate = (e) => {
    setDate(e.target.input)
  }

  const submitHandler = (e) => {
    e.preventDefault()

    const formData = {
      title: inputTitle,
      amount: inputAmount,
      date: new Date(inputDate)
    }

    props.onSaveExpenseData(formData)
    setTitle('')
    setAmount('')
    setDate('')
   }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={inputTitle} onChange={changeTitle}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='text' min='0.01' step='0.01' value={inputAmount} onChange={changeAmount}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='1994-01-01' max='2022-12-31'  value={inputDate} onChange={changeDate}/>
        </div>
      </div>
      <div className='new-expense__actions'>
          <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm