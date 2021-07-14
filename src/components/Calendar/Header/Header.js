import React,{useContext} from 'react'
import './Header.css'
import moment from 'moment'
import calendarContext from '../../Context/Context';
import classNames from 'classnames';

const Header = (props) => {
    const value = useContext(calendarContext);

    const changeShowMode=(e)=>{
        value.setbuttonSelected(e.target.id)
}
const currMonth=()=>{
    return moment().format("MMM");
}
const currYear=()=>{
    return moment().format("YYYY");
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
                        onChange={(e)=>value.setSelectedYear(e.target.value)}
                        value={value.selectedYear}
                        name="year"
                        id="year"
                        className="select font decorated"
                    >
                        {years(1999,2030).map((itm)=>
                            <option key={itm} value={itm}  selected={currYear()===itm}>{itm}</option>
                        )}


                    </select>
                </div>

                <div className="calendarSelect">
                    <select 
                    value={value.selectedMonth}
                    
                    onChange={(e)=>value.setSelectedMonth(e.target.value)}
                      name="month" 
                      id="month" 
                      className="select font decorated"
                    >
                     {
                    moment.monthsShort().map((itm)=>
                            
                     <option key={itm} value={itm}  selected={currMonth()===itm}>{itm}</option>
                        )}
                    </select>
                </div>
                <div className="calendarButtonsContainer">
                    <button
                     className={classNames('font',{btnClicked:parseInt(value.buttonSelected)===1,btn:parseInt(value.buttonSelected)!==1})}  
                     id={1}
                     onClick={changeShowMode}
                     disabled={value.buttonSelected===1}
                    >
                         Month
                    </button>
                    <button 
                     className={classNames('font',{btnClicked:parseInt(value.buttonSelected)===2,btn:parseInt(value.buttonSelected)!==2})}  
 
                     id={2} 
                     onClick={changeShowMode}
                     name="Year"
                     disabled={value.buttonSelected===2}
                    >
                         Year
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default Header
