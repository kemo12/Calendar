import moment from 'moment'
import React,{useState} from 'react'
import './Calendar.css'
import Header from './Header/Header'
import Table from './Table/Table'
const Calendar = () => {
    const [Month,setMonth]=useState(1);
    const [buttonSelected,setbuttonSelected]=useState(1);
    const [value,setValue]=useState(moment());
    const [selectedYear,setSelectedYear]=useState(value.format("YYYY"));
    const [selectedMonth,setSelectedMonth]=useState(value.format("MMM"));

    
    return (
        <div className="calendarContainer">
           <Header Month={Month}
            setMonth={setMonth}
            Month={Month}
            buttonSelected={buttonSelected}
            setbuttonSelected={setbuttonSelected}
            value={value}
            setSelectedYear={setSelectedYear}
            selectedYear={selectedYear}
            selectedMonth={selectedMonth}
            setSelectedMonth={setSelectedMonth}
            />
           <Table
           selectedYear={selectedYear}
           selectedMonth={selectedMonth}
            buttonSelected={buttonSelected}
            value={value}
            setValue={setValue}
            setSelectedMonth={setSelectedMonth}
           />
            
        </div>
    )
}

export default Calendar
