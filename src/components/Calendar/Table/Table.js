import React,{useState,useEffect,useContext} from 'react'
import "./Table.css"
import moment from 'moment';
import calendarContext from '../../Context/Context';
import classNames from 'classnames';

const getAbsoluteTime = (params) => moment().set({ year: 0, month: 0, day: 0, hour: 0, minute: 0, second: 0, ...params })

const Table = () => {
    const value = useContext(calendarContext);
    const week=['Su','Mo','Tu','We','Th','Fr','Sa'];
    const [cal,setCal]=useState([]);
    const startDay=getAbsoluteTime({ year: value.selectedYear, month: value.selectedMonth }).clone().startOf("month").startOf("week");
    const endDay=getAbsoluteTime({ year: value.selectedYear, month: value.selectedMonth }).clone().endOf("month").endOf("week");
    const ccalnderWeekGit=()=>{
        const day=startDay.clone().subtract(1,"day")
        const a=[];
        while(day.isBefore(endDay,"day")){
       a.push(
       Array(7)
       .fill(0)
       .map(()=>day.add(1,"day").clone()))
    }
    return a;
}
    useEffect(()=>{
    setCal(ccalnderWeekGit());
    },[value.selectedYear, value.selectedMonth]);
    return (
        <div className="tableContainer" >
            {parseInt(value.buttonSelected)===1?
            <table className="table">
                <thead>
                    <tr> 
                    {week.map((itm)=>
                    <th className="font" key={itm}><span>{itm}</span></th>
                    )}
                    </tr>
                </thead>
                <tbody>
                    {cal.map((week)=>(
                        <tr key={week}>

                        {
                            week.map(day=>

                                <th  
                                className={classNames('font',{selected:value.Val.isSame(day,'day'),'':!value.Val.isSame(day,'day')})} 
                                   
                                  key={day}
                                  onClick={()=>value.setValue(day)}
                                  >
                                      <button className="dayBtn">
                                        {day.format("D").toString()}
                                      </button>
                                </th>
                                )
                            }
                            </tr>
                    ))}
                </tbody>
            </table>
                :
                <div className="monthesContainer" >
                    {
                    moment.monthsShort().map((itm,index)=>
                           
                            <div key={itm} onClick={()=>value.setSelectedMonth(itm)} 
                                 className={classNames('child','font',{selected:itm=== value.selectedMonth,'':!itm=== value.selectedMonth})}
                            >
                                {itm}
                                </div >
                            
                        )}
                </div>
                }
        </div>
    )
}

export default Table
