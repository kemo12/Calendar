import React,{useState} from 'react'
import './Header.css'

const Header = ({buttonDisable,setButtonDisable}) => {
const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
const changeShowMode=(e)=>{
    e.target.id==1?setButtonDisable(1):setButtonDisable(2);
}
    return (
        <div>
             <div className="calendarHeader">
                <div className="calendarSelect" > 
                    <select
                        name="year"
                        id="year"
                        className="select font decorated"
                    >
                        {months.map((itm)=>
                            <option key={itm}>{itm}</option>
                        )}

                    </select>
                </div>

                <div className="calendarSelect">
                    <select 
                      name="month" 
                      id="month" 
                      className="select font decorated"
                    >
                     {
                     months.map((itm)=>
                           <option key={itm}>{itm}</option>
                        )}
                    </select>
                </div>
                <div className="calendarButtonsContainer">
                    <button
                     className={`font ${buttonDisable===1?"btnClicked":"btn"}`} 
                     id={1}
                     onClick={changeShowMode}
                     disabled={buttonDisable==1?true:false}
                    >
                         Month
                    </button>
                    <button 
                     className={`font ${buttonDisable===2?"btnClicked":"btn"}`} 
                     id={2} 
                     onClick={changeShowMode}
                     name="Year"
                     disabled={buttonDisable==2?true:false}
                    >
                         Year
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default Header
