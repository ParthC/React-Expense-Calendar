import React, { useState } from 'react';
import '../../css/expense.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from '../Expense/ExpenseFilter';
import Card from '../UI/Card'

const Expenses = (props) => {
  // const expenses = [
  //   {
  //     id: 'e1',
  //     title: 'Toilet Paper',
  //     amount: 94.12,
  //     date: new Date(2020, 7, 14),
  //   },
  //   { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  //   {
  //     id: 'e3',
  //     title: 'Car Insurance',
  //     amount: 294.67,
  //     date: new Date(2021, 2, 28),
  //   },
  //   { 
  //     id: 'e4',
  //     title: 'New Desk',
  //     amount: 450,
  //     date: new Date(2021, 5, 12),
  //   },
  // ];

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className='expenses'>
        <h2 className='text'> Calendar </h2>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}/>
        <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}/>
        <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}/>
        <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}/>
    </Card>
  );
}

export default Expenses;
