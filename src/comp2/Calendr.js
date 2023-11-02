import React,{useState} from 'react';
import Calendar from 'react-calendar'; 
import './Calendr.css'


function Calendr() {
 const [date, setDate] = useState(new Date())



return (
 <div className="Calendr" >
   <h1 className="header">Today</h1>
   <div className="calendar-container">
     <Calendar onChange={setDate} value={date}/>
   </div>
   <div className="text-center">
      Selected date: {date.toDateString()}
   </div>
 </div>
  )

}

export default Calendr;