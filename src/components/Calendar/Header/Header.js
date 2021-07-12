import React,{useState} from 'react'
import './Header.css'

const Header = () => {
const [buttonDisable,setButtonDisable]=useState(1);
const changeShowMode=(e)=>{
    e.target.id==1?setButtonDisable(1):setButtonDisable(2);
}
const btnDisableVar=buttonDisable===1?true:false;
    return (
        <div>
            
             <div className="calendarHeader">
                <div className="calendarSelect" > 
                    <select 
                        name="year"
                        id="year"
                        className="select font"
                    >
                        <option value="volvo">2020</option>
                        <option value="saab">2021</option>
                    </select>
                </div>

                <div className="calendarSelect">
                    <select 
                      name="month" 
                      id="month" 
                      className="select font"
                    >
                        <option value="volvo">Jun</option>
                        <option value="saab">Jul</option>
                    </select>
                </div>
                <div className="calendarButtonsContainer">
                    <button
                     className={`font ${buttonDisable==1?"btnClicked":"btn"}`} 
                     id={1}
                     onClick={changeShowMode}
                     disabled={buttonDisable==1?true:false}
                    >
                         Month
                    </button>
                    <button 
                     className={`font ${buttonDisable==2?"btnClicked":"btn"}`} 
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
