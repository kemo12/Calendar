import React,{useState,useEffect,useContext} from 'react'
import "./Table.css"
import moment from 'moment';
import calendarContext from '../../Context/Context';
import classNames from 'classnames';
import {BsChevronLeft,BsChevronRight} from "react-icons/bs"

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
const prevMonth=()=>{
   let prev=getAbsoluteTime({ year: value.selectedYear, month: value.selectedMonth });
   value.setValue(prev.clone().subtract(1,"month"));
   value.setSelectedMonth(prev.subtract(1,"month").format("MMM"))
}
const nextMonth=()=>{
    let prev=getAbsoluteTime({ year: value.selectedYear, month: value.selectedMonth });
    value.setValue(prev.clone().add(1,"month"));
    value.setSelectedMonth(prev.add(1,"month").format("MMM"))
}
    useEffect(()=>{
    setCal(ccalnderWeekGit());
    },[value.selectedYear, value.selectedMonth]);

    return (
        <div className="tableContainer" >
            {parseInt(value.buttonSelected)===1?

            <table className="table">
                    <div className="weekContainer">
                <thead>
                    <tr > 
                        {value.use.use==2?
                <div className="icon" onClick={
                    ()=>{prevMonth()} 
                }
                >

                    <BsChevronLeft/>
                    </div>
                        :null}

                    {week.map((itm)=>
                    <th className={classNames('font',{p10:value.use.use==2,p12:value.use.use!==2})} key={itm}><span>{itm}</span></th>
                    )}
                    {value.use.use==2?
                    <div className="icon"  onClick={()=>{nextMonth()}}>
                    <BsChevronRight/>
                    </div>
                    :null}
                    </tr>
                </thead>
                    </div>
                <tbody  >

                        <div>
                    {cal.map((week)=>(
                        <tr key={week}>

                        {
                            week.map(day=>
                                
                                <th  
                                className=
                                {
                                    classNames(
                                        'font',{selected:value.Val.isSame(day,'day'),
                                        '':!value.Val.isSame(day,'day')
                                    }
                                    )
                                } 
                                
                                key={day}
                                onClick={(e)=>{
                                    value.setValue(day);
                                    let m;
                                    if(value.use.use===1){
                                        if(value.date.date.length==0){
                                            m=[0,0,0]
                                        }else{
                                            
                                            m=[...value.date.date];
                                        }
                                        m[0]=e.target.outerText;
                                        value.setDate.setDate(m)
                                    }
                                    
                                    
                                    
                                }}
                                >
                                      <button className="dayBtn">
                                        {day.format("D").toString()}
                                      </button>
                                </th>
                                )
                            }
                            </tr>
                    ))}
                    </div>

                </tbody>
            </table>

                :
                <div className="monthesContainer" >
                    {
                    moment.monthsShort().map((itm)=>
                           
                            <div key={itm} onClick={(e)=>{value.setSelectedMonth(e.target.innerText)}} 
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
