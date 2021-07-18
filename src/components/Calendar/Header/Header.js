import React,{useContext} from 'react'
import './Header.css'
import moment from 'moment'
import calendarContext from '../../Context/Context';
import classNames from 'classnames';

const Header = () => {
    const value = useContext(calendarContext);
    const changeShowMode=(e)=>{
        value.setbuttonSelected(e.target.id)
}
const HandleSelectMonthChange=(e)=>{
    value.setSelectedMonth(e.target.value);
    let m;

    if(value.use.use===1){
        if(value.date.date.length==0){
             m=[0,0,0]
        }else{

             m=[...value.date.date];
        }
          m[1]=e.target.value;
         value.setDate.setDate(m)
        }
}
const handleYearSelect=(e)=>{
    value.setSelectedYear(e.target.value)
    let m;
    if(value.use.use===1){
        if(value.date.date.length==0){
             m=[0,0,0]
        }else{

             m=[...value.date.date];
        }
          m[2]=e.target.value;
         value.setDate.setDate(m)
        }
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
                        onChange={handleYearSelect}
                        name="year"
                        id="year"
                        className="select font decorated"
                        placeholder="choose"
                        value={value.use.use==2?value.selectedYear:null}
                    >
                        {value.use.use===1?<option disabled={value.date.date[2]>0} selected value>select </option>:null}
                        {years(value.years.years[0],value.years.years[1]).map((itm)=>
                            <option key={itm} value={itm}  selected={value.use.use===2?currYear()===itm:false}>{itm}</option>
                        )}


                    </select>
                </div>

                <div className="calendarSelect">
                    <select 
                    onChange={HandleSelectMonthChange}
                      name="month" 
                      id="month" 
                      className="select font decorated"
                      value={value.use.use==2?value.selectedMonth:null}
                      >
                        {value.use.use===1?<option disabled={value.date.date[1]!=""} selected value>select</option>:null}
                     {
                    moment.monthsShort().map((itm)=>
                            
                     <option key={itm} value={itm}  selected={value.use.use===2?currMonth()===itm:false}>{itm}</option>
                        )}
                    </select>
                </div>
                {value.use.use==2?
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
        :null}
            </div>
            
        </div>
    )
}

export default Header
