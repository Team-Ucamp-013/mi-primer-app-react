import React from 'react'

const InputColor = ({ colorValue }) => {
  const handleChange = (ev) => {
    console.log(ev.target.value)
    colorValue(ev.target.value)
  }
  return (
    <input type="color" onChange={(e) => handleChange(e)} />
  )
}

export default InputColor