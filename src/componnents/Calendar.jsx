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

// const Calendar = () => {
//     const calendarRef = useRef()

//     const open = ()=>calendarRef.current.setOpen(true)

//     const [chosenDate, setChosenDate] = useState(new Date());
//     const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
//         <input type="text" placeholder="Departure Date & Time" 
//         className="border-t border-r  lg:border-t-0 border-0 text-sm lg:text-base lg:text-left text-center lg:pl-6 px-4 lg:py-2 py-4 focus:outline-0 focus:ring-0"
//         onClick={onClick} ref={ref} value={value} readOnly
//         />
//       ));


// };

export default Calendar;
