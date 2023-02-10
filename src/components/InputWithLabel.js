import React from 'react'

const InputWithLabel = ({type='text', children}) => {
  return (
    <div className='input-group'>
        <label>
            {children}
            <input type={type}/>
        </label>
    </div>
  )
}

export default InputWithLabel