import React from 'react'

const Hello = ({ name }) => {
  console.log('propiedades', name)
  return (
    <div>Hello {name} </div>
  )
}

export default Hello

