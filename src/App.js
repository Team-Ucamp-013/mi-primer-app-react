import React, { useState } from 'react'
import './App.css';
import Component from './components/Component';
import Counter from './components/Counter';
import InputColor from './components/InputColor';
import InputTex from './components/InputTex';
import InputSize from './components/InputSize';
import Padre from './components/Padre';

function App() {

  // const [logged, setLogged] = useState(1)
  // const [text, setText] = useState('')
  // const [color, setColor] = useState('')
  // const [size, setSize] = useState('')
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [edad, setEdad] = useState('')
  const [pacientes, setPacientes] = useState([
    {
      nombre: 'Maria',
      apellido: 'perez',
      edad: 31
    },
    {
      nombre: 'Pedro',
      apellido: 'Ramirez',
      edad: 50
    },
    {
      nombre: 'Samuel',
      apellido: 'Sanchez',
      edad: 12
    }
  ])
  // const handleClick = () => {
  //   console.log('click!')
  // }


  const handleChangeName = (ev) => {
    setNombre(ev.target.value)
  }
  const handleChangeLastName = (ev) => {
    setApellido(ev.target.value)
  }
  const handleChangeAge = (ev) => {
    setEdad(ev.target.value)
  }

  const handleClick = () => {
    setPacientes([...pacientes, { nombre, apellido, edad }])
  }

  return (
    <div className="App">
      {/* <Padre /> */}
      {/* <button onClick={() => handleClick()}>
        Click me
      </button> */}
      {/* <Counter /> */}
      {/* <div>
        <Component color={color} text={text} size={size} />
      </div>


      <InputTex textValue={setText} />
      <InputColor colorValue={setColor} />
      <InputSize sizeValue={setSize} /> */}
      <input type="text" onChange={(ev) => handleChangeName(ev)} />
      <input type="text" onChange={(ev) => handleChangeLastName(ev)} />
      <input type="text" onChange={(ev) => handleChangeAge(ev)} />
      <button onClick={() => handleClick()} >Guardar</button>
      {
        pacientes.map((paciente, index) => {
          return (
            <div key={index} >
              <h4>{paciente.nombre} {paciente.apellido}</h4>
              <p>edad: {paciente.edad}</p>
            </div>
          )
        })
      }
      {/* {
        logged === 1 ?
          <h3>Estas loggeado</h3>
          : <h3>No estas loggeado</h3>
      } */}


    </div>
  );
}

export default App;
