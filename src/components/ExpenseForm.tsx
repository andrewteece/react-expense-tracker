import React, { useState } from 'react';

// Define the shape of the expense object
type Expense = {
  title: string;
  amount: number;
  date: string;
};

// Define the props for ExpenseForm
type ExpenseFormProps = {
  onAddExpense: (expense: Expense) => void;
};

const ExpenseForm: React.FC<ExpenseFormProps> = ({ onAddExpense }) => {
  const [title, setTitle] = useState<string>('');
  const [amount, setAmount] = useState<number>(0);
  const [date, setDate] = useState<string>('');

  // Submit handler with properly typed event
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title || !amount || !date) return;

    // console.log(typeof amount, amount);

    onAddExpense({
      title,
      amount,
      date,
    });

    // Reset the form
    setTitle('');
    setAmount(0);
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit} className='expense-form'>
      <input
        type='text'
        value={title}
        placeholder='Title'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
      />
      <input
        type='number'
        value={amount}
        placeholder='Amount'
        min={0}
        step='0.01'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setAmount(Number(e.target.value))
        }
      />
      <input
        type='date'
        value={date}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setDate(e.target.value)
        }
      />
      <button type='submit'>Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
