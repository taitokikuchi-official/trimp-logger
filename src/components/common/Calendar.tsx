import React, { useState } from 'react'
import moment from 'moment'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import { SingleDatePicker } from 'react-dates'
import { Context } from '../../context'

const Calendar = () => {
    const { setState }:any = Context()
    // STATE: この機能でしか使わないstate
    const [date, setDate] = useState(moment)
    const [focused, setFocused] = useState(false)
    return (    
        <SingleDatePicker
        date={date}
        onDateChange={(date:any) => {
            setDate(date)
            setState((prevState:any) => ({ ...prevState, currentDate: date.format("YYYY/MM/DD") }))
        }}
        focused={focused}
        onFocusChange={(focused:any) => {
            setFocused(true)
        }}
        id="date"
        displayFormat="YYYY-MM-DD"
        onClose={(focused:any) => setFocused(false)}
        />
    )
}

export default Calendar