type Expense = {
  id: number;
  title: string;
  amount: number;
  date: string; // or Date if you're storing actual Date objects
};

// Define the props type
type ExpenseListProps = {
  expenses: Expense[];
  onDelete: (id: number) => void;
};

// Apply the prop type to the component
function ExpenseList({ expenses, onDelete }: ExpenseListProps) {
  if (expenses.length === 0) return <p>No Expenses yet.</p>;

  return (
    <ul className='expense-list'>
      {expenses.map((expense) => {
        const formattedDate = new Date(expense.date).toLocaleDateString(
          'en-US',
          {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }
        );

        return (
          <li key={expense.id} className='expense-item'>
            <div>
              <h3>{expense.title}</h3>
              <p>
                ${expense.amount.toFixed(2)} — {formattedDate}
              </p>
            </div>
            <button className='delete-btn' onClick={() => onDelete(expense.id)}>
              🗑️
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default ExpenseList;
