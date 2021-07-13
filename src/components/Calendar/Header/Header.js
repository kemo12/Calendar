import React,{useState} from 'react'
import './Header.css'
import moment from 'moment'

const Header = ({buttonSelected,setbuttonSelected,Month,setMonth,value,setSelectedYear,selectedYear,selectedMonth,setSelectedMonth}) => {
const changeShowMode=(e)=>{
    e.target.id==1?setbuttonSelected(1):setbuttonSelected(2);
}
const currMonth=()=>{
    return value.format("MMM");
}
const currYear=()=>{
    return value.format("YYYY");
}
const years = (startYear,endYear) => {
    const years = []
    const dateStart = moment(`${startYear}`);
    const dateEnd = moment(`${endYear}`);
    while (dateEnd.diff(dateStart, 'years') >= 0) {
      years.push(dateStart.format('YYYY'));
      dateStart.add(1, 'year');
    }
    return years
   }
    return (
        <div>
             <div className="calendarHeader">
                <div className="calendarSelect" > 
                    <select 
                        onChange={(e)=>setSelectedYear(e.target.value)}
                        value={selectedYear}
                        name="year"
                        id="year"
                        className="select font decorated"
                    >
                        {years(1999,2030).map((itm)=>
                            <option key={itm} value={itm}  selected={currYear()==itm}>{itm}</option>
                        )}


                    </select>
                </div>

                <div className="calendarSelect">
                    <select 
                    value={selectedMonth}
                    
                    onChange={(e)=>setSelectedMonth(e.target.value)}
                      name="month" 
                      id="month" 
                      className="select font decorated"
                    >
                     {
                    moment.monthsShort().map((itm)=>
                            
                     <option key={itm} value={itm}  selected={currMonth()==itm}>{itm}</option>
                        )}
                    </select>
                </div>
                <div className="calendarButtonsContainer">
                    <button
                     className={`font ${buttonSelected===1?"btnClicked":"btn"}`} 
                     id={1}
                     onClick={changeShowMode}
                     disabled={buttonSelected==1?true:false}
                    >
                         Month
                    </button>
                    <button 
                     className={`font ${buttonSelected===2?"btnClicked":"btn"}`} 
                     id={2} 
                     onClick={changeShowMode}
                     name="Year"
                     disabled={buttonSelected==2?true:false}
                    >
                         Year
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default Header
