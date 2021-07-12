import React,{useState,useEffect} from 'react'
import "./Table.css"
import moment from 'moment';
const Table = ({buttonDisable}) => {
    const week=['Su','Mo','Tu','We','Th','Fr','Sa'];
    const [cal,setCal]=useState([]);
    const [value,setValue]=useState(moment());
    const startDay=value.clone().startOf("month").startOf("week");
    const endDay=value.clone().endOf("month").endOf("week");
    const onClickDay=()=>{
        console.log("hi")
    }
    useEffect(()=>{
             const day=startDay.clone().subtract(1,"day")
             const a=[];
             while(day.isBefore(endDay,"day")){
            a.push(
            Array(7)
            .fill(0)
            .map(()=>day.add(1,"day").clone()))
        
    }
    setCal(a);
    },[])
    return (
        <div className="tableContainer" >
            {buttonDisable==1?
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
                <h1>sads</h1>
                }
        </div>
    )
}

export default Table
