import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import './App.css';
import { useState } from 'react';

const initialExpenses: Expense[] = [
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
  const [expenses, setExpenses] = useState<Expense[]>(initialExpenses);

  function handleAddExpense(expense: Expense) {
    setExpenses((prevExpenses) => [
      {
        ...expense,
        id: Date.now(),
      },
      ...prevExpenses,
    ]);
  }

  function handleDelete(id) {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
  }

  return (
    <div className='tracker'>
      <h1>React Expense Tracker</h1>
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseList expenses={expenses} onDelete={handleDelete} />
    </div>
  );
}

export default App;
