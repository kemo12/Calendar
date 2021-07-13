import React,{useState,useEffect} from 'react'
import "./Table.css"
import moment from 'moment';

const getAbsoluteTime = (params) => moment().set({ year: 0, month: 0, day: 0, hour: 0, minute: 0, second: 0, ...params })

const Table = ({buttonSelected,setValue,selectedYear,selectedMonth,value,setSelectedMonth}) => {
    const week=['Su','Mo','Tu','We','Th','Fr','Sa'];
    const [cal,setCal]=useState([]);
    const startDay=getAbsoluteTime({ year: selectedYear, month: selectedMonth }).clone().startOf("month").startOf("week");
    const endDay=getAbsoluteTime({ year: selectedYear, month: selectedMonth }).clone().endOf("month").endOf("week");
    const month=[moment.monthsShort()];
    const diplayMonth=()=>{
        var arrays = [], size = 3;   
        for (let i = 0; i < month.length; i += size)
        arrays.push(month.slice(i, i + size));
    }

    useEffect(()=>{
             const day=startDay.clone().subtract(1,"day")
             const a=[];
             while(day.isBefore(endDay,"day")){
            a.push(
            Array(7)
            .fill(0)
            .map(()=>day.add(1,"day").clone()))
            diplayMonth()
        
    }
    setCal(a);
    },[selectedYear, selectedMonth]);
    return (
        <div className="tableContainer" >
            {buttonSelected==1?
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
                                  className={`font ${value.isSame(day,'day')?"selected":""}`}  
                                  key={day}
                                  onClick={()=>setValue(day)}
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
                           
                            <div key={itm} onClick={()=>setSelectedMonth(itm)} className={`child font ${itm==selectedMonth?("selected"):("")}`}>
                                {itm}
                                </div >
                            
                        )}
                </div>
                }
        </div>
    )
}

export default Table
