import React,{useState} from 'react';
import './App.css';

import Calendar from './components/Calendar/Calendar';

function App() {
  const years=[2010,2025];
  const [date,setDate]= useState([]);
  return (

    < div className ="App" >
      <div className="componentContainer">
        <h1>Date Picker</h1>
      < Calendar use={1}  years={years} setDate={setDate} date={date}  />
      <h6>{date.length!=0?`PickedDate: ${date[0]==0?"day":date[0]}/${date[1]==0?"month":date[1]}/${date[2]==0?"year":date[2]}`:"Please select date"}</h6>
      </div>
      <div className="componentContainer">
      <h1>Date Displayer</h1>
      < Calendar use={2} years={years}   />
      </div>
      
    </div>
  );
}

export default App;



{/* <Calendar 
    isYearValid={(year) => year <= 2006 && year >= 2019}`
/>

years.filter(props.isYearValid || defaultFilter) */}