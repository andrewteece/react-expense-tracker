function ExpenseList({ expenses }) {
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
            <button>🗑️</button>
          </li>
        );
      })}
    </ul>
  );
}

export default ExpenseList;
