import React from 'react'

const InputTex = ({ textValue }) => {
  console.log(textValue)
  const handleChange = (ev) => {
    console.log(ev)
    textValue(ev.target.value)
  }
  return (
    <input type="text" placeholder="Agrega un texto" onChange={(e) => handleChange(e)} />
  )
}

export default InputTex