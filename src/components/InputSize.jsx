import React from 'react'

const InputSize = ({ sizeValue }) => {

  const handleChange = (ev) => {
    console.log(ev.target.value)
    sizeValue(ev.target.value)
  }

  return (
    <div>
      <input type="number" placeholder="Agregar un numero"
        onChange={(ev) => handleChange(ev)} />
    </div>
  )
}

export default InputSize