import React, {useState} from 'react'

const CheckBoxGroup = ({options, onChange}) => {

    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleOptionChange = (event) => {
      const value = event.target.value;
      const isChecked = event.target.checked;
  
      if (isChecked) {
        setSelectedOptions([...selectedOptions, value]);
      } else {
        setSelectedOptions(selectedOptions.filter((option) => option !== value));
      }
  
      if (onChange) {
        onChange(selectedOptions);
      }
    };

  return (
    <>
        {
            options.map((option)=>(
                <li key={option.label}>
                    <div className="cursor-pointer flex justify-between items-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                        <label htmlFor={option.label} className="cursor-pointer text-sm font-medium mx-4 text-gray-900 dark:text-gray-300">
                            <div href="#" className="whitespace-nowrap cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white ">
                                <span className="cursor-pointer break-words ml-3">{option.label}</span>
                            </div>
                        </label>
                        <input className="cursor-pointer w-5 h-5 mx-4 text-blue-600 bg-gray-100 border-blue-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        id={option.label} 
                        type="checkbox" 
                        value={option.value}
                        checked={selectedOptions.includes(option.value)}
                        onChange={handleOptionChange}
                        />
                    </div>
                </li>
            ))
        }
    </>
  )
}

export default CheckBoxGroup