import React,{useState} from 'react'
import './Calendar.css'
import Header from './Header/Header'
import Table from './Table/Table'
const Calendar = () => {
    const [Month,setMonth]=useState(1);
    const [buttonDisable,setButtonDisable]=useState(1);

    return (
        <div className="calendarContainer">
           <Header Month={Month}
            setMonth={setMonth}
            buttonDisable={buttonDisable}
            setButtonDisable={setButtonDisable}
            />
           <Table
            buttonDisable={buttonDisable}
           />
            
        </div>
    )
}

export default Calendar
