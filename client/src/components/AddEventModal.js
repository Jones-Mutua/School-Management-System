import React from 'react'
import {useState} from 'react'
import Modal from 'react-modal'
import Datetime from 'react-datetime'

function AddEventModal({isOpen, onClose,onEventAdd}) {
    const [name , setName] = useState('')
    const [start, setStart]=useState(new Date())
    const [end, setEnd]=useState(new Date())

    const onSubmit=(e)=>{
        e.preventDefault();
        
        onEventAdd({
            name,
            start,
            end

        })
                       
        
        onClose()
    }
    
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
        <form onSubmit={onSubmit}> 
            <input placeholder="name" value={name} onChange={e =>setName(e.target.value)}/>

            <div>
                <label >Start Date</label>
                <Datetime value={start} onChange={date => setStart(date)}/>
            </div>
            <div>
                <label >End Date</label>
                <Datetime value={end} onChange={date => setEnd(date)}/>
            </div>
            <button>Add Event</button>
        </form>
    </Modal>
  )
}

export default AddEventModal