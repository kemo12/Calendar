import moment from 'moment'
import React,{useState} from 'react'
import './Calendar.css'
import Header from './Header/Header'
import Table from './Table/Table'
import {ThingsProvider} from '../Context/Context';
// eslint-disable-next-line react/prop-types
const Calendar = ({use,years,setDate,date}) => {
   
    const [buttonSelected,setbuttonSelected]=useState(1);
    const [Val,setValue]=useState(moment());
    const [selectedYear,setSelectedYear]=useState(Val.format("YYYY"));
    const [selectedMonth,setSelectedMonth]=useState(Val.format("MMM"));  
  
    return (
        <div className="calendarContainer">
            <ThingsProvider
            value={{
                date:{date},
                setDate:{setDate},
                years:{years},
                use:{use},
                buttonSelected:buttonSelected,
                setbuttonSelected:setbuttonSelected,
                Val:Val,
                setSelectedYear:setSelectedYear,
                selectedYear:selectedYear,
                selectedMonth:selectedMonth,
                setSelectedMonth:setSelectedMonth,
                setValue:setValue
            }}
            >
           <Header />
           <Table/>
           </ThingsProvider>
        </div>
    )
}

export default Calendar
