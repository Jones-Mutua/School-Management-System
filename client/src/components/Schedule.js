import React from 'react'
//import { FullCalendar } from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid';

import AddEventModal from '../components/AddEventModal'
import {useState, useRef} from 'react'
import axios from "axios";
import moment from "moment"

function Schedule() {
  const [modalOpen, setModalOpen]= useState(false);
  const[event, setEvents]= useState([])
  const calendarRef = useRef(null)

  const onEventAdded = (event) => {
    let calendarApi = calendarRef.current.getApi()
    calendarApi.addEvent({
      start:moment(event.start).toDate(),
      end: moment(event.end).toDate,
      name: event.name
    });
    console.log(event)
  }
 const  handleEventAdd = async (e) => {
   const {data} = await axios.post('http://localhost:8000/api/create-event')
   console.log(data)
 }
 const handleDatesSet= async (data) => {
   const response = await axios.get('http://localhost:8000/api/view-event?start='+moment(data.start).toISOString()+"&end="+moment(data.end).toISOString())
   setEvents(response.data)
 }
  return (
    <section>
       <button onClick={()=>setModalOpen(true)}>add exam schedule</button>
       <div style={{position: 'relative',zIndex:0}}>
       <FullCalendar
       ref={calendarRef}
       events={event}
       initialView="dayGridMonth" 
         plugins={[dayGridPlugin]}
         eventAdd={event => handleEventAdd(event)}
         dateSet={(date)=> handleDatesSet(date)}

         />
       
       
       
       
       {/* /> */}
       </div>
       
       <AddEventModal
         isOpen={modalOpen}
         onClose ={()=>setModalOpen(false)}
         onEventAdd={(event) => onEventAdded(event)}
       />
   </section>
  )
}

export default Schedule