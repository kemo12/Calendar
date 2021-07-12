import './App.css';
import Calendar from './components/Calendar/Calendar';

function App() {
  return (
    <div className="App">
      <Calendar/>
    </div>
  );
}

export default App;



{/* <Calendar 
    isYearValid={(year) => year <= 2006 && year >= 2019}`
/>

years.filter(props.isYearValid || defaultFilter) */}