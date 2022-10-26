import React, { useState } from 'react';
import '../../css/expense.css';
import ExpenseList from './ExpenseList';
import ExpensesFilter from '../Expense/ExpenseFilter';
import ExpenseChart from './ExpensesChart'
import Card from '../UI/Card'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className='expenses'>
        <h2 className='text'> Calendar </h2>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expense={filteredExpenses} />
        <ExpenseList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
