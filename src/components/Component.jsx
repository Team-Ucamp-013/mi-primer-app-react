import React from 'react'

const Component = ({ color, text, size }) => {
  console.log('size', size)
  return (
    <div style={{
      color: color,
      fontSize: size + 'px'
    }}
    >
      <h1>{text}</h1>
    </div>
  )
}

export default Component