import React, { forwardRef, useImperativeHandle, useRef } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = forwardRef((props, ref) => {
    const calendarRef = useRef()

    useImperativeHandle(ref, () => ({
      open() {
        calendarRef.current.setOpen(true)
      }
    }));
  
    return (
        <ReactDatePicker ref={calendarRef}
          dateFormat="dd/MM/yyyy"
          selected={props.chosenDate? props.chosenDate : new Date()}
          onChange={(date) => props.setChosenDate(date)}
          showTimeInput
          minDate={new Date()}
        />
    );
  });

  Calendar.displayName = 'Calendar';

export default Calendar;
