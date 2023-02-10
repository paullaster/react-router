import React from 'react'

const Form = ({handleSubmit, children}) => {
  return (
    <form>
        {children}
    </form>
  )
}

export default Form