import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import './App.css';

function App() {
  return (
    <div className='tracker'>
      <h1>React Expense Tracker</h1>
      <ExpenseForm />
      <ExpenseList />
    </div>
  );
}

export default App;
