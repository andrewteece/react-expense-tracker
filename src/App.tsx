import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import './App.css';
import { useState } from 'react';

const initialExpenses = [
  {
    id: 1,
    title: 'Groceries',
    amount: 60,
    date: '2025-05-01',
  },
  {
    id: 2,
    title: 'House Rent',
    amount: 600,
    date: '2025-05-01',
  },
  {
    id: 3,
    title: 'Internet Bill',
    amount: 60,
    date: '2025-04-28',
  },
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);

  return (
    <div className='tracker'>
      <h1>React Expense Tracker</h1>
      <ExpenseForm />
      <ExpenseList />
    </div>
  );
}

export default App;
