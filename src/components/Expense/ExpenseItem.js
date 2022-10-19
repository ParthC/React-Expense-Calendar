import { useState } from 'react'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import '../../css/expenseItem.css'


const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.title)

  const onClickButton = () => {
    setTitle(title)
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount} </div>
      </div>
      {/* <button onClick={onClickButton}>click me !!</button> */}
    </Card>
  )
}

export default ExpenseItem
 
