import React from 'react'

const InputWithLabel = ({type='text', children}) => {
  return (
    <div>
        <label>
            {children}
            <input type={type}/>
        </label>
    </div>
  )
}

export default InputWithLabel