import  {useState} from 'react'
import Expenses from './components/Expense/Expenses';
import UserExpense from './components/NewExpense/UserExpense';

const mockData = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 9, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 4, 12),
  },
];

function App() {

  const [mockDataExpense, setMockData] = useState(mockData)

  const addExpenseHandler = (expenses) => {
    setMockData((previousMockData) => {
      return [expenses, ...previousMockData]
    })
  }

  return (
    <div>
      <UserExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={mockDataExpense} />
    </div>
  );
}

export default App;