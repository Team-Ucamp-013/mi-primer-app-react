import React, { useState } from 'react'
import './App.css';
import Component from './components/Component';
import Counter from './components/Counter';
import InputColor from './components/InputColor';
import InputTex from './components/InputTex';
import InputSize from './components/InputSize';
import Padre from './components/Padre';

function App() {

  const [text, setText] = useState('')
  const [color, setColor] = useState('')
  const [size, setSize] = useState('')
  const handleClick = () => {
    console.log('click!')
  }
  return (
    <div className="App">
      {/* <Padre /> */}
      {/* <button onClick={() => handleClick()}>
        Click me
      </button> */}
      {/* <Counter /> */}
      <div>
        <Component color={color} text={text} size={size} />
      </div>


      <InputTex textValue={setText} />
      <InputColor colorValue={setColor} />
      <InputSize sizeValue={setSize} />
    </div>
  );
}

export default App;
