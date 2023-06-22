import React, {useState} from 'react'

const RadioButtonGroup = ({options, name, onChange}) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
      const value = event.target.value;
      setSelectedOption(value);
      if (onChange) {
        onChange(value);
      }
    };

  return (
    <>
        {options.map((option)=>(
            <li key={option.label}>
                <div className="cursor-pointer flex justify-between items-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <label htmlFor={option.label} className="whitespace-nowrap cursor-pointer mx-4 text-sm font-medium text-gray-900 dark:text-gray-300">
                    <div href="#" className="cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white ">
                        
                        <span className="ml-3">{option.label}</span>
                    </div>
                </label>
                <input  className="w-5 h-5 mx-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    id={option.label} 
                    type="radio" 
                    name={name}
                    value={option.value}
                    onChange={handleOptionChange}
                />
                </div>
            </li>
        ))}
    </>
  )
}

export default RadioButtonGroup