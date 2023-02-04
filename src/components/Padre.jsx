import React from 'react'
import Hijo from './Hijo'

const Padre = () => {
  return (
    <>
      <h2>Hola soy el Padre</h2>
      <Hijo name="Fredo" />
      <Hijo name="Antonio" />
      <Hijo name="Dany" />
      <Hijo name="Nau" />
    </>
  )
}

export default Padre