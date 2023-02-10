import React from 'react'

const InputWithLabel = ({setInputValue, type='text', children}) => {
    const handleOnChange = (e) => {
        setInputValue(e.target.value);
    };
  return (
    <div className='input-group'>
        <label>
            {children}
            <input type={type} onChange={setInputValue}/>
        </label>
    </div>
  )
}

export default InputWithLabel